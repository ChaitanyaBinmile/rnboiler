import React from 'react';
import {UserProps, UserStackParamList} from '../type';
import RouteDrawer from '../RouteDrawer/RouteDrawer';
import UserRoute from './UserRouteName';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenHome from '../../screens/ScreenHome/ScreenHome';
import {ScreenNetworkLogger} from '../../customInterceptor/ScreenNetworkLogger/ScreenNetworkLogger';
import BottomTabs from '../RouteTabs/BottomTabs';

const UserStack = createNativeStackNavigator<UserStackParamList>();

function RoutesUser({show}: UserProps) {
  if (!show) return null;
  return (
    <UserStack.Navigator
    initialRouteName={UserRoute.RouteDrawer}
      screenOptions={{
        headerShown: false,
      }}>
      <UserStack.Screen
        name={UserRoute.ScreenBottomTab}
        component={BottomTabs}
      />
      <UserStack.Screen name={UserRoute.RouteDrawer} component={RouteDrawer} />
      <UserStack.Screen name={UserRoute.HOME} component={ScreenHome} />
      <UserStack.Screen
        name={UserRoute.ScreenNetworkLogger}
        component={ScreenNetworkLogger}
      />
    </UserStack.Navigator>
  );
}
export default RoutesUser;
