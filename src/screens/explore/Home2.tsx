import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { emailSchema } from '../../common/CustomTextField/Validations/ZodValidations';  
import CustomTextField from '../../common/CustomTextField/CustomTextField';
import HomeInActiveSvg from '../../assets/images/BottomTabIcons/HomeInActiveSvg';  
import styles from './StylesHome2';

const Home2 = () => {
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailValidation = (value: string) => {
    const result = emailSchema.safeParse(value);
    if (!result.success) {
      setEmailError(result.error.errors[0].message);  
    } else {
      setEmailError(''); 
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomTextField
        label="Email"
        value={emailValue}
        onChangeText={(text) => {
          setEmailValue(text);
          handleEmailValidation(text); 
        }}
        placeholder="Enter your email"
        maxLength={100}
        keyboardType="email-address"
        required={true}
        errorMessage={emailError}  
        onFocus={() => console.log('Email input focused')}
        onBlur={() => {
          // Perform validation on blur
          handleEmailValidation(emailValue);
          console.log('Email input blurred');
        }}
        multiline={false}
        customContainerStyles={styles.customContainer}
        customInputStyles={styles.customInput}
        customLabelStyles={styles.labelStyle}
        customErrorStyles={styles.customError}
        icon={<HomeInActiveSvg />} 
      />
    </SafeAreaView>
  );
};

export default Home2;
