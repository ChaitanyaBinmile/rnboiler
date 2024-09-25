import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../../utils/theme';
import Home from '../home/Home';
import CustomIcon from '../../common/CustomIcon';
import Home2 from '../home/Home2';

const Tab = createBottomTabNavigator();
const TabIcon = ({name, focused}: {name: string, focused: boolean}) => (
    <CustomIcon
        name={name}
        size={25}
        color={focused ? COLORS.primaryBlackRGBA : COLORS.secondaryLightGreyHex}
    />
  );

const Dummy = () => {
  return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarStyle,
            }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => <TabIcon name="home" focused={focused} />,
            }}/>
            <Tab.Screen name="Home2" component={Home2} options={{
                tabBarIcon: ({ focused }) => <TabIcon name="cart" focused={focused} />,
            }}/>
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
    BlurViewStyles:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});
export default Dummy;
