import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  Keyboard,
} from 'react-native';
import axios from 'axios';
import {useForm, Controller} from 'react-hook-form';
import {
  AutoCompleteProps,
  AutoCompleteOption,
  SubmissionData,
} from './type';
import styles from './StylesCustomAutoComplete';

const AutoComplete: React.FC<AutoCompleteProps> = ({
  containerStyle,
  hideResults = false,
  inputContainerStyle,
  listContainerStyle,
  renderTextInput,
  flatListProps,
  onSelect,
  placeholder,
  label,
  disabled = false,
  error,
  required = false,
  clearable = false,
  submitButtonStyle,
  submitButtonTextStyle,
  onSubmit,
  onShowResults,
}) => {
  const {
    control,
    formState: {errors},
  } = useForm({
    defaultValues: {
      autoCompleteValue: [] as AutoCompleteOption[],
    },
  });

  const [query, setQuery] = useState<string>('');
  const [options, setOptions] = useState<AutoCompleteOption[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<AutoCompleteOption[]>(
    [],
  );
  // const API_URL = 'http://10.0.2.2:3000/options';
  const API_URL = 'http://10.10.11.142:3000/options';

  useEffect(() => {
    fetchOptions();
  }, []);

  const fetchOptions = async () => {
    try {
      const response = await axios.get(API_URL);
      setOptions(response.data);
    } catch (error) {
      console.error('Error fetching options from API', error);
    }
  };

  const handleSubmitA = () => {
    const selectedIds = selectedOptions
      .filter(option => option.id)
      .map(option => option.id!);

    const addedOptions = selectedOptions
      .filter(option => !option.id)
      .map(option => option.value);

    if (required && selectedOptions.length === 0) {
      setSubmitError('Please select at least one option.');
    } else {
      setSubmitError(null);
      if (onSubmit) {
        const submissionData: SubmissionData = {
          selectedIds,
          addedOptions,
        };
        onSubmit(submissionData);
      }
    }

    console.log('Selected IDs:', selectedIds);
    console.log('Added Options (manual):', addedOptions);
  };

  const handleSelect = (
    item: AutoCompleteOption,
    onChange: (value: AutoCompleteOption[]) => void,
    value: AutoCompleteOption[],
  ) => {
    onChange([...value, item]);
    setSelectedOptions([...selectedOptions, item]);
    setQuery('');
    if (onSelect) onSelect(item);
    setSubmitError(null);
  };

  const handleRemoveOption = (
    item: AutoCompleteOption,
    onChange: (value: AutoCompleteOption[]) => void,
    value: AutoCompleteOption[],
  ) => {
    const updatedOptions = value.filter(option => option.label !== item.label);
    onChange(updatedOptions);
    setSelectedOptions(updatedOptions);
  };

  const handleClear = (onChange: (value: AutoCompleteOption[]) => void) => {
    onChange([]);
    setSelectedOptions([]);
    setQuery('');
  };

  const handleAddOption = (
    onChange: (value: AutoCompleteOption[]) => void,
    value: AutoCompleteOption[],
  ) => {
    if (query.trim()) {
      const newOption: AutoCompleteOption = {
        label: query,
        value: query,
      };

      const existingOption = options.find(
        option => option.label === newOption.label,
      );
      if (!existingOption) {
        onChange([...value, newOption]);
        setSelectedOptions([...selectedOptions, newOption]);
        setQuery('');
        setSubmitError(null);
      }
    }
  };

  const handleSubmitEditing = (
    onChange: (value: AutoCompleteOption[]) => void,
    value: AutoCompleteOption[],
  ) => {
    handleAddOption(onChange, value);
    Keyboard.dismiss();
  };

  const filteredData = options.filter(
    option => option.label && query && option.label.includes(query),
  );

  if (onShowResults) {
    onShowResults(filteredData.length > 0 && query.length > 0);
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <Controller
        control={control}
        name="autoCompleteValue"
        rules={{required: 'At least one option must be selected.'}}
        render={({field: {onChange, value}}) => (
          <>
            {label && (
              <Text
                style={[
                  styles.label,
                  required && value.length === 0 && !error
                    ? styles.requiredMark
                    : styles.defaultText,
                ]}>
                {label}
                {required && (
                  <Text
                    style={[
                      styles.requiredMark,
                      submitError ? styles.errorMark : null,
                    ]}>
                    {' *'}
                  </Text>
                )}
              </Text>
            )}

            <View
              style={[
                styles.inputContainer,
                inputContainerStyle,
                error || submitError
                  ? styles.errorBorder
                  : isFocused
                  ? styles.focusBorder
                  : styles.blurBorder,
              ]}>
              <View style={styles.chipInputContainer}>
                {value.map((item: AutoCompleteOption) => (
                  <View key={item.label} style={styles.selectedChip}>
                    <Text style={styles.chipText}>{item.label}</Text>
                    <TouchableOpacity
                      onPress={() => handleRemoveOption(item, onChange, value)}>
                      <Text style={styles.chipRemove}>✖</Text>
                    </TouchableOpacity>
                  </View>
                ))}

                {renderTextInput ? (
                  renderTextInput({
                    value: query,
                    onChangeText: setQuery,
                    onFocus: () => setIsFocused(true),
                    onBlur: () => setIsFocused(false),
                    editable: !disabled,
                    placeholder: value.length === 0 ? placeholder : '',
                    onSubmitEditing: () => handleSubmitEditing(onChange, value),
                  })
                ) : (
                  <TextInput
                    value={query}
                    onChangeText={setQuery}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={value.length === 0 ? placeholder : ''}
                    editable={!disabled}
                    style={[
                      styles.textInput,
                      disabled ? styles.disabledTextInput : null,
                      value.length > 0 ? styles.textInputWithChips : null,
                    ]}
                    onSubmitEditing={() => handleSubmitEditing(onChange, value)}
                  />
                )}
              </View>

              {clearable && value.length > 0 && (
                <View style={styles.clearwrapper}>
                  <TouchableOpacity
                    onPress={() => handleClear(onChange)}
                    style={styles.clearButton}>
                    <Text style={styles.clearText}>✖</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            {!hideResults && query.length > 0 && (
              <FlatList
                {...flatListProps}
                data={filteredData}
                keyExtractor={item => item.label}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => handleSelect(item, onChange, value)}>
                    <Text style={styles.dropdownItem}>{item.label}</Text>
                  </TouchableOpacity>
                )}
                style={[styles.listContainer, listContainerStyle]}
              />
            )}

            {submitError && (
              <Text style={styles.submitErrorText}>{submitError}</Text>
            )}
            {errors.autoCompleteValue && (
              <Text style={styles.errorText}>
                {errors.autoCompleteValue.message}
              </Text>
            )}

            <TouchableOpacity
              style={[styles.submitButton, submitButtonStyle]}
              onPress={() => {
                handleSubmitA();
                handleClear(onChange);
              }}>
              <Text style={[styles.submitButtonText, submitButtonTextStyle]}>
                Submit
              </Text>
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
};

export default AutoComplete;
