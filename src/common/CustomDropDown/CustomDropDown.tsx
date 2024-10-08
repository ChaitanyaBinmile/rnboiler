import React from 'react';
import { View } from 'react-native';
import { DropdownProps } from './Types/CustomDropdownInterface'; // Adjust path accordingly
import { Dropdown as SingleSelectDropdown } from 'react-native-paper-dropdown'; // Import the single-select dropdown component
import { MultiSelectDropdown } from 'react-native-paper-dropdown'; // Import the multi-select dropdown component

type CustomDropdownProps = DropdownProps;

const CustomDropdown: React.FC<CustomDropdownProps> = (props) => {
  const {
    mode,
    value,
    onSelect,
    options,
    placeholder,
    label,
    disabled,
    error,
    menuUpIcon,
    menuDownIcon,
    maxMenuHeight,
    menuContentStyle,
    testID,
    menuTestID,
    hideMenuHeader,
    statusBarHeight,
  } = props;

  const isMultiSelect = Array.isArray(value);

  return (
    <View>
      {isMultiSelect ? (
        <MultiSelectDropdown
          testID={testID}
          menuTestID={menuTestID}
          value={value as string[]}
          onSelect={onSelect as (value: string[]) => void}
          options={options}
          menuUpIcon={menuUpIcon}
          menuDownIcon={menuDownIcon}
          maxMenuHeight={maxMenuHeight}
          menuContentStyle={menuContentStyle}
          placeholder={placeholder}
          label={label}
          mode={mode}
          disabled={disabled}
          error={error}
          hideMenuHeader={hideMenuHeader}
          statusBarHeight={statusBarHeight}
        />
      ) : (
        <SingleSelectDropdown
          testID={testID}
          menuTestID={menuTestID}
          value={value as string}
          onSelect={onSelect as (value?: string) => void}
          options={options}
          menuUpIcon={menuUpIcon}
          menuDownIcon={menuDownIcon}
          maxMenuHeight={maxMenuHeight}
          menuContentStyle={menuContentStyle}
          placeholder={placeholder}
          label={label}
          mode={mode}
          disabled={disabled}
          error={error}
          hideMenuHeader={hideMenuHeader}
          statusBarHeight={statusBarHeight}
        />
      )}
    </View>
  );
};

export default CustomDropdown;
