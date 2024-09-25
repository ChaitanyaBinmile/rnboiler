import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../utils/theme';
import Home from '../screens/home/Home';
import Explore from '../screens/home/Explore';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
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
           <AntDesign
              name="home"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({focused}) => (
            <Entypo
              name="bell"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    // backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    // borderTopColor: COLORS.transparent,
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
export default AppNavigator;
