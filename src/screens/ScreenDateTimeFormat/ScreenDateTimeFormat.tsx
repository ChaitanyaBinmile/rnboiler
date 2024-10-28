import React, { useState } from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import CustomDateTimeFormat from '../../common/CustomDateTimeFormat/CustomDateTimeFormat';
import { styles } from './StyleScreenDateTimeFormat';
import english from '../../assets/lang/English/LangEnglish';

const ScreenDateTimeFormat = () => {
  const [dateInput, setDateInput] = useState('');
  const [dateToPass, setDateToPass] = useState('');
  const [utcdateInput, setutcDateInput] = useState('');
  const [utcdateOutput, setutcDateOutput] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='Enter Epoch date'
        value={dateInput}
        onChangeText={setDateInput}
      />
      <Button
        title={english.SUBMIT}
        onPress={() => setDateToPass(dateInput || '')}
      />
      {dateToPass && <CustomDateTimeFormat date={dateToPass} utcdate={''} />}

      <TextInput
        style={styles.textInput}
        placeholder='Enter UTC Time (YYYY-MM-DD HH:mm:ss)'
        value={utcdateInput}
        onChangeText={setutcDateInput}
      />
      <Button
        title={english.SUBMIT}
        onPress={() => setutcDateOutput(utcdateInput || '')}
      />
      {utcdateOutput && <CustomDateTimeFormat utcdate={utcdateOutput} date={''} />}
    </View>
  );
};

export default ScreenDateTimeFormat;
