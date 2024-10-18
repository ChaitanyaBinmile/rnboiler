import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CheckBoxProps} from './type';
import {Controller, useForm} from 'react-hook-form';
import styles from './StyleCheckBox';

const CustomCheckBox: React.FC<CheckBoxProps> = ({
  onSelect,
  options,
  placeholder,
  label,
  disabled,
  error,
  multiple = false,
  required = false,
  style = {},
  inputStyle = {},
  checkStyle = {},
  errorStyle = {},
}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm({
    defaultValues: {
      checkValue: multiple ? ([] as string[]) : ('' as string),
    },
  });

  const isSelected = (optionValue: string, value: string | string[]) => {
    return multiple
      ? Array.isArray(value) && value.includes(optionValue)
      : value === optionValue;
  };

  const handleSelect = (
    optionValue: string,
    onChange: (value: any) => void,
    value: string | string[],
  ) => {
    if (disabled) return;

    if (multiple) {
      if (Array.isArray(value)) {
        const newValue = value.includes(optionValue)
          ? value.filter(v => v !== optionValue)
          : [...value, optionValue];
        onChange?.(newValue);
      }
    } else {
      const newValue = optionValue === value ? '' : optionValue;
      onChange?.(newValue);
    }
  };

  const showError = required && !!errors.checkValue;

  const onSubmit = (data: any) => {
    console.log('Selected Check Box:', data.checkValue);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, styles.defaultText]}>
        {label}{' '}
        {required && (
          <Text
            style={[
              styles.requiredMark,
              showError ? styles.errorText : styles.defaultText,
            ]}>
            *
          </Text>
        )}
      </Text>

      <Controller
        control={control}
        name="checkValue"
        rules={{required: 'This field is required'}}
        render={({field: {onChange, value}}) => (
          <>
            {options.map(option => (
              <TouchableOpacity
                key={option.id}
                onPress={() => handleSelect(option.value, onChange, value)}
                style={[
                  styles.checkOption,
                  checkStyle,
                  isSelected(option.value, value) ? styles.selectedCheck : {},
                ]}
                disabled={disabled}>
                <View
                  style={[
                    styles.checkCircle,
                    isSelected(option.value, value)
                      ? styles.selectedCheckCircle
                      : {},
                  ]}>
                  {isSelected(option.value, value) && (
                    <Text style={styles.checkmark}>✓</Text>
                  )}
                </View>
                <Text style={[styles.checkLabel, inputStyle]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}

            {showError && (
              <Text style={[styles.errorText, errorStyle]}>
                Error: {errors.checkValue?.message}
              </Text>
            )}
          </>
        )}
      />
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomCheckBox;
