import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, FlatList } from 'react-native';
import { DropdownProps } from './Types/CustomDropdownInterface';
import styles from './StylesCustomDropDown';

const CustomDropdown: React.FC<DropdownProps> = ({
  value = '',
  onSelect,
  options,
  placeholder,
  label,
  disabled,
  error,
  multiple = false,
  onAddOption,
  clearable = false,
  required = false,
  style = {},
  inputStyle = {},
  dropdownStyle = {},
  errorStyle = {},
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [newOption, setNewOption] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const isMultiSelect = Array.isArray(value);

  const toggleDropdown = () => {
    if (!disabled) setDropdownVisible(!dropdownVisible);
  };

  const handleSelect = (selectedId: string) => {
    const selectedValue = options.find(option => option.id === selectedId)?.value;

    if (multiple && isMultiSelect && selectedValue) {
      const newValue = (value as string[]).includes(selectedValue)
        ? (value as string[]).filter(v => v !== selectedValue)
        : [...(value as string[]), selectedValue];
      onSelect?.(newValue);
    } else if (selectedValue) {
      onSelect?.(selectedValue);
      setDropdownVisible(false);
    }
  };

  const handleAddOption = () => {
    if (newOption.trim()) {
      const doesOptionExist = options.some(option => option.value === newOption);

      if (!doesOptionExist) {
        const newOptionObject = { id: newOption, label: newOption, value: newOption }; // Use newOption for id for demonstration

        if (onAddOption) {
          onAddOption(newOptionObject); // Add the new option to the list
        }

        if (multiple && isMultiSelect) {
          onSelect?.([...(value as string[]), newOption]);
        } else {
          onSelect?.(newOption);
        }

        setNewOption(''); // Clear input after adding
        setDropdownVisible(false); // Close dropdown
      }
    }
  };

  const handleClearSelection = () => {
    if (multiple) {
      onSelect?.([]);
    } else {
      onSelect?.('');
    }
  };

  const hasValue = multiple ? (value as string[]).length > 0 : !!value;

  // Determine if we should show an error
  const showError = required && !hasValue && !!error;

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, styles.defaultText]}>
        {label} {required && (
          <Text style={[styles.requiredMark, showError ? styles.errorText : styles.defaultText]}>
            *
          </Text>
        )}
      </Text>
      <TouchableOpacity onPress={toggleDropdown} disabled={disabled}>
        <View style={[
          styles.inputContainer,
          showError ? styles.errorBorder : isFocused ? styles.focusBorder : styles.blurBorder,
          hasValue ? styles.selectedBorder : {},
        ]}>
          <TextInput
            editable={false}
            placeholder={placeholder}
            value={isMultiSelect ? (value as string[]).join(', ') : (value as string)}
            style={[styles.inputText, inputStyle]}
          />
          {clearable && (isMultiSelect ? (value as string[]).length > 0 : value) && (
            <TouchableOpacity onPress={handleClearSelection} style={styles.clearButton}>
              <Text style={styles.clearText}>✖</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
      {dropdownVisible && (
        <View style={[styles.dropdown, dropdownStyle]}>
          <FlatList
            data={options}
            keyExtractor={item => item.id} // Use id as key
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelect(item.id)}> 
                <Text
                  style={[
                    styles.dropdownItem,
                    (value as string[]).includes(item.value) ? styles.selectedItemText : {}
                  ]}
                >
                  {item.label}
                </Text>
                <View style={styles.optionSeparator} />
              </TouchableOpacity>
            )}
          />
          {onAddOption && (
            <View style={styles.addOptionContainer}>
              <TextInput
                value={newOption}
                onChangeText={setNewOption}
                placeholder="Add option"
                style={styles.addOptionInput}
              />
              <TouchableOpacity onPress={handleAddOption} style={styles.AddButton}>
                <Text style={styles.addOptionButton}>Add</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
      {showError && <Text style={[styles.errorText, errorStyle]}>Error: {error}</Text>}
    </View>
  );
};

export default CustomDropdown;
