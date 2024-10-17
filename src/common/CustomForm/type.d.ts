import { ViewStyle, TextStyle, TextInputProps } from 'react-native';
import { ZodSchema } from 'zod';
import { ReactNode } from 'react';

export interface FormField {
  name: string;
  label?: string;
  value?: string;  
  placeholder?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  required?: boolean;
  errorMessage?: string;
  customContainerStyles?: ViewStyle;
  customInputStyles?: ViewStyle;
  customLabelStyles?: TextStyle; 
  customErrorStyles?: TextStyle;
  secureTextEntry?: boolean;
  maxLength?: number;
  keyboardType?: TextInputProps['keyboardType'];
  multiline?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText?: (text: string) => void;  
}


export interface CustomFormProps {
  fields: FormField[];  
  onSubmit: (data: Record<string, string>) => void;  
  buttonLabel?: string;  
  validationSchema: ZodSchema; 
  children?: React.ReactNode;
}
