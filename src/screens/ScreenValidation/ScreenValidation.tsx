import React, {useState} from 'react';
import {Alert, FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {validationSchemaText} from './validations/Validations';
import {Controller, useForm} from 'react-hook-form';
import CustomForm from '../../common/CustomForm/CustomForm';
import {fields} from './dummy/data';
import CustomDropdown from '../../common/CustomDropDown/CustomDropDown';
import {zodResolver} from '@hookform/resolvers/zod';
import {Option} from '../../common/CustomDropDown/type';
import ScreenCustomDropdown from './ScreenCustomDropdown';

const ScreenValidation = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(validationSchemaText),
    mode: 'onChange',
  });
  const [options1, setOptions1] = useState<Option[]>([
    {id: '1', label: 'Option 1', value: 'option1'},
    {id: '2', label: 'Option 2', value: 'option2'},
    {id: '3', label: 'Option 3', value: 'option3'},
  ]);

  const handleFormSubmit = (data: any) => {
    Alert.alert('Form Submitted!', JSON.stringify(data));
  };
  const [temp] = useState<Option[]>([
    {id: '1', label: 'Choice A', value: 'choiceA'},
  ]);
  return (
    <FlatList
      style={styles.container}
      data={temp}
      keyExtractor={item => item.id}
      renderItem={() => (
        <View>
          <CustomForm
            fields={fields}
            onSubmit={handleFormSubmit}
            buttonLabel="Submit"
            validationSchema={validationSchemaText}>
            <ScreenCustomDropdown
              options={options1}
              placeholder="Select an Option"
              label="Select an Option"
              error={errors.dropDown?.message}
              multiple={true}
            />
          </CustomForm>
        </View>
      )}
    />
  );
};

export default ScreenValidation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
