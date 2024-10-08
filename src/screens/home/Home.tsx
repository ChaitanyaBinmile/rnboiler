import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import CustomDropdown from '../../common/CustomDropDown/CustomDropDown';

const MultiSelectExample = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const multiSelectOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4', value: '4' },
  ];

  const handleSelect = (value?: string | string[]) => {
    if (Array.isArray(value)) {
      setSelectedValues(value as string[]);
      console.log('Selected values:', value);
    } else {
      console.log('Selected value:', value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 20 }}>
        <Text>Select multiple items:</Text>
        <CustomDropdown
          testID="multi-select-dropdown"
          menuTestID="multi-select-menu"
          value={selectedValues} 
          onSelect={handleSelect} 
          options={multiSelectOptions}
          placeholder="Select options"
          label="Multi Select"
          mode="flat"
          maxMenuHeight={200}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default MultiSelectExample;
