import React from 'react';
import Dummy from '../../screens/dummy/Dummy';
import {UserProps, UserStackParamList} from '../type';
import RouteDrawer from '../RouteDrawer/RouteDrawer';
import UserRoute from './UserRouteName';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/home/Home';

const UserStack = createNativeStackNavigator<UserStackParamList>();

function RoutesUser({show}: UserProps) {
  if (!show) return null;
  return (
    <UserStack.Navigator
      initialRouteName={UserRoute.RouteDrawer}
      screenOptions={{
        headerShown: false,
      }}>
      <UserStack.Screen name={UserRoute.RouteDrawer} component={RouteDrawer} />
      <UserStack.Screen name={UserRoute.HOME} component={Home} />

      <UserStack.Screen name={UserRoute.ScreenBottomTab} component={Dummy} />
    </UserStack.Navigator>
  );
}
export default RoutesUser;
