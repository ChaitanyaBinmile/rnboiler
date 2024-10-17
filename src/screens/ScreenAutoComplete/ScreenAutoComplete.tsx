import React from 'react';
import { SafeAreaView } from 'react-native';
import AutoComplete from '../../common/CustomAutoComplete/CustomAutoComplete'; 
import styles from './StylesHome2';
import english from '../../assets/lang/English/LangEnglish';

const ScreenAutoComplete: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AutoComplete
        placeholder={english.AUTOCOMPLETE_PLACEHOLDER}
        label={english.AUTOCOMPLETE_LABEL}
        required
        clearable
        submitButtonStyle={styles.submitButton}
        submitButtonTextStyle={styles.submitButtonText}
      />
    </SafeAreaView>
  );
};

export default ScreenAutoComplete;
