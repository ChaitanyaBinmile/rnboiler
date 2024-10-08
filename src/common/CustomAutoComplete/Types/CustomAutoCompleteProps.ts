import { StyleProp, ViewStyle, FlatListProps, TextInputProps } from 'react-native';

export interface CustomAutoCompleteProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  hideResults?: boolean;
  data?: any[];
  inputContainerStyle?: StyleProp<ViewStyle>;
  listContainerStyle?: StyleProp<ViewStyle>;
  listStyle?: StyleProp<ViewStyle>;
  onShowResults?: (show: boolean) => void;
  onStartShouldSetResponderCapture?: () => boolean;
  renderTextInput?: (props: TextInputProps) => JSX.Element;
  flatListProps?: Partial<FlatListProps<any>>;
  renderResultList?: () => JSX.Element;
  onSelect?: (item: any) => void; 
}
