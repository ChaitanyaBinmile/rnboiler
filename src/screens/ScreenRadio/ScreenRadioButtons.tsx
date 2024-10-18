import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Option} from '../../common/CustomRadioButton/type';
import CustomRadioButton from '../../common/CustomRadioButton/CustomRadioButton';
import {styles} from './StyleScreenRadio';
import english from '../../assets/lang/English/LangEnglish';
import {options1, options2} from './dummy/data';
const ScreenRadioButtons: React.FC = () => {
  return (
    <View style={styles.container}>
      <CustomRadioButton
        options={options1}
        placeholder={english.RADIO_MULTIPLE_PLACEHOLDER}
        label={english.RADIO_MULTIPLE_LABLE}
        required={true}
        style={styles.radioGroup}
        multiple={true}
        inputStyle={styles.input}
        radioStyle={styles.radioOption}
        errorStyle={styles.errorText}
      />
      <CustomRadioButton
        options={options2}
        placeholder={english.RADIO_SINGLE_PLACEHOLDER}
        label={english.RADIO_SINGLE_LABLE}
        required={true}
        style={styles.radioGroup}
        multiple={false}
        inputStyle={styles.input}
        radioStyle={styles.radioOption}
        errorStyle={styles.errorText}
      />
    </View>
  );
};

export default ScreenRadioButtons;
