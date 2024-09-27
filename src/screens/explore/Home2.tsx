import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './StylesHome2';
import CustomTextField from '../../common/CustomTextField/CustomTextField';
import HomeInActiveSvg from '../../assets/images/BottomTabIcons/HomeInActiveSvg';

const Home2 = () => {
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorDesMessage, setDesErrorMessage] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorpassMessage, setpassErrorMessage] = useState('');


  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomTextField
        label="Email"
        value={emailValue}
        onChangeText={text => {
          setEmailValue(text);
          if (text.trim() === '') {
            setErrorMessage('Email is required.');
          } else if (!validateEmail(text)) {
            setErrorMessage('Please enter a valid email address.');
          } else {
            setErrorMessage('');
          }
        }}
        placeholder="Enter your email"
        maxLength={100}
        keyboardType="email-address"
        required={true}
        errorMessage={errorMessage}
        onFocus={() => console.log('Email input focused')}
        onBlur={() => {
          if (emailValue.trim() === '') {
            setErrorMessage('Email is required.');
          } else if (!validateEmail(emailValue)) {
            setErrorMessage('Please enter a valid email address.');
          }
          console.log('Email input blurred');
        }}
        multiline={false}
        customContainerStyles={styles.customContainer}
        customInputStyles={styles.customInput}
        customLabelStyles={styles.labelStyle}
        customErrorStyles={styles.customError}
      />
      <CustomTextField
        label="Description"
        value={inputValue}
        onChangeText={text => {
          setInputValue(text);
          if (text.length < 5) {
            setDesErrorMessage('Input must be at least 5 characters long.');
          } else {
            setDesErrorMessage('');
          }
        }}
        placeholder="Enter a description"
        maxLength={100}
        keyboardType="default"
        required
        // secureTextEntry={true}
        errorMessage={errorDesMessage}
        onFocus={() => console.log('Input focused')}
        onBlur={() => console.log('Input blurred')}
        multiline={true}
        icon=<HomeInActiveSvg/>
        // iconPosition='right'
        customContainerStyles={styles.customContainer}
        customInputStyles={styles.customInput}
        defaultValue="This is a default value"
      />
      <CustomTextField
        label="Password"
        value={passwordValue}
        onChangeText={setPasswordValue}
        placeholder="Enter your password"
        secureTextEntry={true}
        errorMessage={errorpassMessage}
        onFocus={() => console.log('Password input focused')}
        onBlur={() => console.log('Password input blurred')}
        customContainerStyles={styles.customContainer}
      />
    </SafeAreaView>
  );
};

export default Home2;
