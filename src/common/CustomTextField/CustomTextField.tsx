import React, { useState } from 'react';
import { TextInput, View, Text, ViewStyle } from 'react-native';
import { CustomTextFieldProps } from './Types/CustomTextFieldInterface';
import styles from './StylesCustomTextField';
import { ZodSchema } from 'zod'; 

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  icon,
  iconPosition = 'left',
  required = false,
  errorMessage = '',
  customContainerStyles,
  customInputStyles,
  customLabelStyles,
  customErrorStyles,
  secureTextEntry = false,
  onFocus,
  onBlur,
  maxLength,
  keyboardType,
  defaultValue,
  multiline = false,
  validationSchema, 
  onValidate,  
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [validationError, setValidationError] = useState('');

  const getInputStyle = (): ViewStyle => {
    let borderColor = '#ccc'; 

    if (validationError || errorMessage) {
      borderColor = 'red';  
    } else if (isFocused) {
      borderColor = '#333'; 
    }
    return {
      ...styles.textInput,
      borderColor,
      ...customInputStyles,
    };
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) onBlur();

    // Perform validation on blur using the Zod schema
    if (validationSchema) {
      const result = validationSchema.safeParse(value);
      if (!result.success) {
        setValidationError(result.error.errors[0].message);
        if (onValidate) onValidate(false, result.error.errors[0].message);
      } else {
        setValidationError('');
        if (onValidate) onValidate(true);
      }
    }
  };

  return (
    <View style={[styles.container, customContainerStyles]}>
      {label && (
        <Text style={[styles.label, customLabelStyles]}>
          {label} {required && <Text style={styles.required}>*</Text>}
        </Text>
      )}
      <View style={[styles.inputContainer, { borderColor: validationError || errorMessage ? 'red' : isFocused ? '#333' : '#ccc' }]}>
        {icon && iconPosition === 'left' && <View style={styles.icon}>{icon}</View>}
        <TextInput
          style={getInputStyle()}
          value={value || defaultValue}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onFocus={() => {
            setIsFocused(true);
            if (onFocus) onFocus();
          }}
          onBlur={handleBlur}  
          maxLength={maxLength}
          keyboardType={keyboardType}
          multiline={multiline}
        />
        {icon && iconPosition === 'right' && <View style={styles.icon}>{icon}</View>}
      </View>
      {validationError ? (
        <Text style={[styles.errorText, customErrorStyles]}>{validationError}</Text>
      ) : errorMessage ? (
        <Text style={[styles.errorText, customErrorStyles]}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

export default CustomTextField;
