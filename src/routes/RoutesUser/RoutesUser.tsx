import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../Routes';
import Dummy from '../../screens/dummy/ScreenDummy';
import { UserProps, UserStackParamList } from '../types';

const UserStack = createStackNavigator<UserStackParamList>();

function RoutesUser({ show }: UserProps) {
  if (!show) return null;
  return (
      <UserStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
          <UserStack.Screen
        name={Routes.SCREEN_BOTTOM_TAB as keyof UserStackParamList}
        component={Dummy}
      />
      </UserStack.Navigator>
  );
}
export default RoutesUser;
