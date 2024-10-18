import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import ComponentHeader from '../../commonComponents/ComponentHeader/ComponentHeader';
import Icons from '../../assets/images/svgIcons/SvgData';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { styles } from './StyleHome';

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

export default ScreenHome;
