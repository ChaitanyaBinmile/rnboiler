import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FocusAwareStatusBar } from '../../common/CustomStatusBar/CustomStatusBar';
import {styles} from './StylesScreenStatusBar'
import english from '../../assets/lang/English/LangEnglish';
const Tab = createBottomTabNavigator();
const ProductsScreen = ({ navigation }: any) => {
  return (
    <View style={styles.productsScreen}>
      <FocusAwareStatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <Text style={styles.text}>{english.STATUSBAR_SCREEN1}</Text>
    </View>
  );
};

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.homeScreen}>
      <FocusAwareStatusBar backgroundColor="transparent" translucent
 barStyle="dark-content" />
      <Text style={styles.text}>{english.STATUSBAR_SCREEN2}</Text>
      <Button title="Go to Products" onPress={() => navigation.navigate('Products')} />
    </View>
  );
};



const ScreenCheck = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={ProductsScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default ScreenCheck;


