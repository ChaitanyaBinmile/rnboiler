import {ReactNode} from 'react';
import {GestureResponderEvent, ViewStyle, TextStyle} from 'react-native';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'outline'
  | 'text'
  | 'success'
  | 'warning'
  | 'info';
export type ButtonSize = 'small' | 'medium' | 'large';
export type IconPosition = 'left' | 'right';

export interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  customStyles?: ViewStyle;
  customTextStyles?: TextStyle;
}
