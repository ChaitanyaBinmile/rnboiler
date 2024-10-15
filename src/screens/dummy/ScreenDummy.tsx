import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../../theme/theme';
import Home from '../home/ScreenHome';
import Home2 from '../explore/ScreenHome2';
import HomeActiveSvg from '../../assets/icons/BottomTabIcons/HomeActiveSvg';
import MaterialsActiveSvg from '../../assets/icons/BottomTabIcons/MaterialsActiveSvg';
import styles from './StylesDummy';

const Tab = createBottomTabNavigator();


const Dummy = () => {
  return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarStyle,
            }}>
            <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({focused}) => (
         <HomeActiveSvg
          color={focused ? COLORS.primaryBlackHex : COLORS.primaryBlackRGBA}
         />
        ),
      }}></Tab.Screen>
    <Tab.Screen
      name="Home2"
      component={Home2}
      options={{
        tabBarIcon: ({focused}) => (
          <MaterialsActiveSvg
          color={focused ? COLORS.primaryBlackHex : COLORS.primaryBlackRGBA}
          />
        ),
      }}></Tab.Screen>
        </Tab.Navigator>
  );
};

export default Dummy;
