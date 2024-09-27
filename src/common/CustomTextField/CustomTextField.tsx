import React, { useState } from 'react';
import { TextInput, View, Text, ViewStyle } from 'react-native';
import { CustomTextFieldProps } from './Types/CustomTextFieldInterface';
import styles from './StylesCustomTextField';

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
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const getInputStyle = (): ViewStyle => {
    return {
      ...styles.textInput,
      ...customInputStyles,
    };
  };

  return (
    <View style={[styles.container, customContainerStyles]}>
      {label && (
        <Text style={[styles.label, customLabelStyles]}>
          {label} {required && <Text style={styles.required}>*</Text>}
        </Text>
      )}
      <View style={styles.inputContainer}>
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
          onBlur={() => {
            setIsFocused(false);
            if (onBlur) onBlur(); 
          }}
          maxLength={maxLength}
          keyboardType={keyboardType}
          multiline={multiline}
        />
        {icon && iconPosition === 'right' && <View style={styles.icon}>{icon}</View>}
      </View>
      {errorMessage ? (
        <Text style={[styles.errorText, customErrorStyles]}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

export default CustomTextField;
