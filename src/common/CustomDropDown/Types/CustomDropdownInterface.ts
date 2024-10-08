export interface Option {
  label: string;
  value: string;
}

export interface DropdownProps {
  testID?: string;
  menuTestID?: string;
  value?: string | string[]; 
  onSelect?: (value?: string | string[]) => void;
  options: Option[];
  menuUpIcon?: JSX.Element;
  menuDownIcon?: JSX.Element;
  maxMenuHeight: number;
  menuContentStyle?: object;
  placeholder: string;
  label: string;
  mode: 'flat' | 'outlined';
  disabled?: boolean;
  error?: boolean;
  hideMenuHeader?: boolean;
  statusBarHeight?: number;
}
