import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import CustomDropdown from '../../common/CustomDropDown/CustomDropDown';
import { Option } from '../../common/CustomDropDown/Types/CustomDropdownInterface';

const MultiSelectExample: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      dropdownValue1: [],
      dropdownValue2: [],
    },
  });

  const [options1, setOptions1] = useState<Option[]>([
    { id: '1', label: 'Option 1', value: 'option1' },
    { id: '2', label: 'Option 2', value: 'option2' },
    { id: '3', label: 'Option 3', value: 'option3' },
  ]);

  const [options2, setOptions2] = useState<Option[]>([
    { id: '1', label: 'Choice A', value: 'choiceA' },
    { id: '2', label: 'Choice B', value: 'choiceB' },
    { id: '3', label: 'Choice C', value: 'choiceC' },
  ]);

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
  };


  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="dropdownValue1"
        rules={{ required: 'This field is required' }}
        render={({ field: { onChange, value } }) => (
          <CustomDropdown
            value={value}
            onSelect={onChange}
            options={options1}
            placeholder="Select an option from Dropdown 1"
            label="Choose Options from Dropdown 1"
            error={errors.dropdownValue1?.message}
            required={true}
            multiple={true}
            clearable={true}
            style={styles.dropdown}
            inputStyle={styles.input}
            dropdownStyle={styles.dropdownMenu}
            errorStyle={styles.errorText}
          />
        )}
      />

      <Controller
        control={control}
        name="dropdownValue2"
        rules={{ required: 'This field is required' }}
        render={({ field: { onChange, value } }) => (
          <CustomDropdown
            value={value}
            onSelect={onChange}
            options={options2}
            placeholder="Select an option from Dropdown 2"
            label="Choose Options from Dropdown 2"
            error={errors.dropdownValue2?.message}
            required={true}
            multiple={false}
            clearable={true}
            style={styles.dropdown}
            inputStyle={styles.input}
            dropdownStyle={styles.dropdownMenu}
            errorStyle={styles.errorText}
          />
        )}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  dropdown: {
    marginBottom: 20,
    // height: 300,
  },
  input: {
    fontSize: 16,
  },
  dropdownMenu: {
    backgroundColor: '#f9f9f9',
    height: 250,
  },
  errorText: {
    color: 'red',
  },
});

export default MultiSelectExample;
