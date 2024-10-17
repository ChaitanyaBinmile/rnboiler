// import React from 'react';
// import {StyleSheet} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {COLORS} from '../../theme/theme';
// // import Home2 from '../ScreenDummy/Home2';
// import HomeActiveSvg from '../../assets/images/BottomTabIcons/HomeActiveSvg';
// import MaterialsActiveSvg from '../../assets/images/BottomTabIcons/MaterialsActiveSvg';
// import ScreenHome from '../ScreenHome/ScreenHome';

// const Tab = createBottomTabNavigator();

// const ScreenDummy = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarHideOnKeyboard: true,
//         tabBarShowLabel: false,
//         tabBarStyle: styles.tabBarStyle,
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={ScreenHome}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <HomeActiveSvg
//               color={focused ? COLORS.primaryBlackHex : COLORS.primaryBlackRGBA}
//             />
//           ),
//         }}></Tab.Screen>
//       <Tab.Screen
//         name="Home2"
//         // component={Home2}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <MaterialsActiveSvg
//               color={focused ? COLORS.primaryBlackHex : COLORS.primaryBlackRGBA}
//             />
//           ),
//         }}></Tab.Screen>
//     </Tab.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   tabBarStyle: {
//     height: 80,
//     position: 'absolute',
//     // backgroundColor: COLORS.primaryBlackRGBA,
//     borderTopWidth: 0,
//     elevation: 0,
//     // borderTopColor: COLORS.transparent,
//   },
//   BlurViewStyles: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
// });
// export default ScreenDummy;
