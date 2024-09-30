import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Alert } from 'react-native';
import CustomForm from '../../common/CustomForm/CustomForm'; 
import { FormValidationSchema } from '../../common/CustomForm/validations/Validations'; 
import HomeActiveSvg from '../../assets/images/BottomTabIcons/HomeActiveSvg';
import MaterialsActiveSvg from '../../assets/images/BottomTabIcons/MaterialsActiveSvg';

const MultiSelectExample: React.FC = () => {
  const formFields = [
    {
      name: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      required: true,
      customContainerStyles: { 
        backgroundColor: '#fff',
        borderRadius: 5, 
        padding: 10 
      },
      customLabelStyles: { 
        color: '#000' ,
        fontSize: 16, 
      },
      customInputStyles: { 
        padding: 10, 
        borderColor: '#000' ,
        color: '#000',
        fontSize: 16,
      } ,
      keyboardType: 'email-address' as const,
    },
    {
      name: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      required: true,
      // icon: <MaterialsActiveSvg />,
      // iconPosition: 'left' as const,
      customContainerStyles: { 
        backgroundColor: '#fff', 
        borderRadius: 5, 
        padding: 10 
      },
      customLabelStyles: { 
        color: '#000',
        fontSize: 16, 
      },
      customInputStyles: { 
        padding: 10, 
        color: '#000',
        fontSize: 16 
      },
      secureTextEntry: true,
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      placeholder: 'Confirm your password',
      required: true,
      icon: <HomeActiveSvg />,
      iconPosition: 'left' as const,
      customContainerStyles: { 
        backgroundColor: '#fff', 
        borderRadius: 5, 
        padding: 10 
      } ,
      customLabelStyles: { 
        color: '#000', 
        fontSize: 16, 
      } ,
      customInputStyles: { 
        padding: 10, 
        color: '#000', 
        fontSize: 16 
      },
      secureTextEntry: true,
    },
  ];

  const handleFormSubmit = (data: any) => {
    Alert.alert('Form Submitted!', JSON.stringify(data));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greetingText}>Hello</Text>
      <View style={styles.formWrapper}>
        <Text style={styles.title}>Register</Text>
        <CustomForm
          fields={formFields}
          onSubmit={handleFormSubmit}
          validationSchema={FormValidationSchema}
          buttonLabel="Register"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  greetingText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  formWrapper: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MultiSelectExample;
