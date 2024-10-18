import React, {useState} from 'react';
import {Option} from '../../common/CustomCheckBox/type';
import {StyleSheet, View} from 'react-native';
import CustomCheckBox from '../../common/CustomCheckBox/CustomCheckBox';
import {styles} from './StyleCheckBox';
import english from '../../assets/lang/English/LangEnglish';

const ScreenCheckBox: React.FC = () => {
  const [options1, setOptions1] = useState<Option[]>([
    {id: '1', label: 'Option 1', value: 'option1'},
    {id: '2', label: 'Option 2', value: 'option2'},
    {id: '3', label: 'Option 3', value: 'option3'},
  ]);
  const [options2, setOptions2] = useState<Option[]>([
    {id: '1', label: 'Choice A', value: 'choiceA'},
    {id: '2', label: 'Choice B', value: 'choiceB'},
    {id: '3', label: 'Choice C', value: 'choiceC'},
  ]);

  return (
    <View style={styles.container}>
      <CustomCheckBox
        options={options1}
        placeholder={english.CHECKBOX_MULTIPLE_PLACEHOLDER}
        label={english.CHECKBOX_MULTIPLE_LABLE}
        required={true}
        style={styles.checkGroup}
        multiple={true}
        inputStyle={styles.input}
        checkStyle={styles.checkOption}
        errorStyle={styles.errorText}
      />
      <CustomCheckBox
        options={options2}
        placeholder={english.CHECKBOX_SINGLE_PLACEHOLDER}
        label={english.CHECKBOX_SINGLE_LABLE}
        required={true}
        style={styles.checkGroup}
        multiple={false}
        inputStyle={styles.input}
        checkStyle={styles.checkOption}
        errorStyle={styles.errorText}
      />
    </View>
  );
};

export default ScreenCheckBox;
