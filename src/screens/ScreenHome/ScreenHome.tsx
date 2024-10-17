import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import ComponentHeader from '../../commonComponents/ComponentHeader/ComponentHeader';
import Icons from '../../assets/images/svgIcons/SvgData';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const ScreenHome = () => {
  const navigation=useNavigation()
  const handleDrawer=()=>{
    navigation.dispatch(DrawerActions.openDrawer())
  }
  return (
    <SafeAreaView style={styles.container}>
      <ComponentHeader title='home page' leftIcon={<Icons.MenuIcon/>} onIconPress={handleDrawer}/>
      <View style={styles.content}>
        <Text style={styles.text}>Home</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Set a background color for the safe area
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default ScreenHome;
