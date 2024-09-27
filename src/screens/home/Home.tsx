import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, GestureResponderEvent} from 'react-native';
import CustomButton from '../../common/CustomButton/CustomButton';
import HomeIconSvg from '../../assets/images/BottomTabIcons/HomeIconSvg';
import MaterialsActiveSvg from '../../assets/images/BottomTabIcons/MaterialsActiveSvg';

const Home = () => {
  const [loading, setLoading] = React.useState(false);

  const handlePress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('Action completed!');
    }, 2000);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Home</Text>
      <CustomButton
        title="Confirm"
        onPress={() => console.log('Confirmed')}
        variant="primary"
        icon={<MaterialsActiveSvg />} 
        iconPosition="left"
        customStyles={{ width: '80%', height: 50 }} 
        customTextStyles={{ color: '#fff' }} 
      />
            <CustomButton
        title="Confirm"
        onPress={() => console.log('Confirmed')}
        variant="success"
        icon={<HomeIconSvg />} 
        iconPosition="right"
        size='large'
        customStyles={{ width: '60%', height: 50, backgroundColor: '#2ecc71', borderRadius:12 }}
        customTextStyles={{ fontSize: 18, color: '#fff' }} 
      />
      <CustomButton
        title="Proceed with Caution"
        onPress={handlePress}
        variant="warning"
        isLoading={loading} 
        customStyles={{ width: '90%', height: 50 , backgroundColor: '#FE3A37FF', borderRadius: 12}}
        customTextStyles={{ fontSize: 16, color: '#fff' }}
      />
       <CustomButton
        title="More Info"
        onPress={() => console.log('Showing more info')}
        variant="info"
        // icon={<InfoIcon />} 
        iconPosition="right"
        customStyles={{ width: '90%', height: 50 , borderRadius: 12, backgroundColor: '#410EDCFF'}}
        isDisabled={true}
        customTextStyles={{ fontSize: 16, color: '#fff' }}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8', 
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default Home;
