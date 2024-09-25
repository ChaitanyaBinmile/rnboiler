/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { LocalizationProvider } from './src/utils/CommonContext/LocalizationProvider';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home/Home';
import Dummy from './src/screens/dummy/Dummy';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();


function App(): React.JSX.Element {


  return (
    <LocalizationProvider>
       <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
              {/* <Stack.Screen
                name="Home"
                component={Home}
                options={{ animation: 'slide_from_bottom' }}
              /> */}
              <Stack.Screen
                name="Dummy"
                component={Dummy}
                options={{ animation: 'slide_from_bottom' }}
              />
            </Stack.Navigator>
       </NavigationContainer>
      </LocalizationProvider>
  );
}

export default App;
