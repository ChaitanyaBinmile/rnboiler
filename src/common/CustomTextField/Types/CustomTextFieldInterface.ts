import { TextInputProps, ViewStyle, TextStyle } from 'react-native';
import { ReactNode } from 'react';

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
    showLabelOutside?: boolean;           
    focusBorderColor?: string;           
    disabled?: boolean;                    
    maxLength?: number;          
    keyboardType?: TextInputProps['keyboardType']; 
    defaultValue?: string;          
    multiline?: boolean;        
    onFocus?: () => void;             
    onBlur?: () => void;                
}
