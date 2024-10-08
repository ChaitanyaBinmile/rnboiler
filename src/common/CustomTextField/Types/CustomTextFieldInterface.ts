import { TextInputProps, ViewStyle, TextStyle } from 'react-native';
import { ReactNode } from 'react';
import { ZodSchema } from 'zod'; 

export interface CustomTextFieldProps extends TextInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  required?: boolean;
  errorMessage?: string;
  customContainerStyles?: ViewStyle;
  customInputStyles?: ViewStyle;
  customLabelStyles?: TextStyle;
  customErrorStyles?: TextStyle;
  validationSchema?: ZodSchema;  
  onValidate?: (isValid: boolean, error?: string) => void; 
  secureTextEntry?: boolean;
  maxLength?: number;
  keyboardType?: TextInputProps['keyboardType'];
  multiline?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}
