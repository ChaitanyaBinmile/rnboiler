import {
  FlatListProps,
  StyleProp,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from 'react-native';

export interface AutoCompleteOption {
  id?: string; 
  label: string;
  value: string;
}

export interface SubmissionData {
  selectedIds: string[];  
  addedOptions: string[]; 
}

export interface AutoCompleteProps {
  containerStyle?: StyleProp<ViewStyle>;
  hideResults?: boolean;
  data?: AutoCompleteOption[];
  inputContainerStyle?: StyleProp<ViewStyle>;
  listContainerStyle?: StyleProp<ViewStyle>;
  onShowResults?: (show: boolean) => void;
  renderTextInput?: (props: TextInputProps) => JSX.Element;
  flatListProps?: Partial<FlatListProps<AutoCompleteOption>>;
  onSelect?: (item: AutoCompleteOption) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  error?: string;
  required?: boolean;
  clearable?: boolean;
  submitButtonStyle?: StyleProp<ViewStyle>;
  submitButtonTextStyle?: StyleProp<TextStyle>;
  onSubmit?: (data: SubmissionData) => void;  
}









