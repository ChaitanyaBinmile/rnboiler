import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CustomDropdown from '../../common/CustomDropDown/CustomDropDown';
import {Option} from '../../common/CustomDropDown/type';
import {styles} from './StyleScreenDropDown';
import english from '../../assets/lang/English/LangEnglish';
import {options1, options2} from './dummy/data';

const ScreenDropdown: React.FC = () => {
  return (
    <View style={styles.container}>
      <CustomDropdown
        options={options1}
        placeholder={english.DROPDOWN_MULTIPLE_PLACEHOLDER}
        label={english.DROPDOWN_MULTIPLE_LABLE}
        required={true}
        multiple={true}
        clearable={false}
        //style={styles.dropdown}
      />

      <CustomDropdown
        options={options2}
        placeholder={english.DROPDOWN_SINGLE_PLACEHOLDER}
        label={english.CHECKBOX_SINGLE_LABLE}
        required={true}
        multiple={false}
        clearable={true}
        // style={styles.dropdown}
      />
    </View>
  );
};

export default ScreenDropdown;
