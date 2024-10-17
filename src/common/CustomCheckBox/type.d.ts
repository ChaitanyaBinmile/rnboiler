import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface Option {
    id: string;
    label: string;
    value: string;
}
export interface CheckBoxProps {
    value?: string | string[];
    onSelect?: (value: string| string[])=> void;
    options: Option[];
    placeholder: string;
    label: string;
    disabled?: boolean;
    error?: string | undefined;
    multiple?:boolean;
    required?: boolean;
    style?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    checkStyle?: StyleProp<ViewStyle>;
    errorStyle?: StyleProp<TextStyle>;
}
