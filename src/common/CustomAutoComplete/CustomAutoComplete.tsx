import React from 'react';
import { FlatList, TextInput, Text, View } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import { CustomAutoCompleteProps } from './Types/CustomAutoCompleteProps';
import styles from './StylesCustomAutoComplete';

const CustomAutoComplete: React.FC<CustomAutoCompleteProps> = ({
  hideResults = false,
  data = [],
  onSelect, 
  renderTextInput,
  flatListProps,
  onShowResults,
  renderResultList,
  ...textInputProps
}) => {
  const renderDefaultTextInput = () => (
    <TextInput
      style={styles.textInput}
      {...textInputProps}
    />
  );

  const renderDefaultResultList = () => (
    <FlatList
      data={data}
      style={styles.listContainer}
      keyExtractor={(_, idx) => idx.toString()}
      renderItem={({ item }) => (
        <Text 
          style={styles.resultItem} 
        >
          {item}
        </Text>
      )}
      {...flatListProps}
    />
  );

  return (
    <Autocomplete
      data={data}
      hideResults={hideResults}
      containerStyle={styles.autoCompleteContainer}
      inputContainerStyle={styles.inputContainer}
      onShowResults={onShowResults}
      renderTextInput={renderTextInput || renderDefaultTextInput}
      renderResultList={renderResultList || renderDefaultResultList}
    />
  );
};

export default CustomAutoComplete;
