import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import CustomForm from '../../common/CustomForm/CustomForm';
import { FormValidationSchema } from '../../common/CustomForm/validations/Validations';
import {styles} from './StyleScreenForm'
import { formFields } from './dummy/data';
import english from '../../assets/lang/English/LangEnglish';

const ScreenForm: React.FC = () => 
  {
  const handleFormSubmit = (data: any) => {
    Alert.alert('Form Submitted!', JSON.stringify(data));
    console.log(data);
  };


  return (
    <View style={styles.container}>
     <Text style={styles.greetingText}>{english.FORM_GREETING}</Text>
      <View style={styles.formWrapper}>
        <Text style={styles.title}>{english.FORM_TITLE}</Text>
        <CustomForm
          fields={formFields}
          onSubmit={handleFormSubmit}
          validationSchema={FormValidationSchema}
          //buttonLabel="Register"
          
        />
      </View>

    </View>
  );
};



export default ScreenForm;
