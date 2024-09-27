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
