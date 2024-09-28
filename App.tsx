/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { LocalizationProvider } from './src/utils/CommonContext/LocalizationProvider';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dummy from './src/screens/dummy/Dummy';
import { NavigationContainer } from '@react-navigation/native';
import { NetworkLoggerProvider } from './src/networkLogger/NetworkProvider';
import { Routes } from './src/routes/Routes';
import { ScreenNetworkLogger } from './src/customInterceptor/ScreenNetworkLogger/ScreenNetworkLogger';
import { Provider as PaperProvider } from 'react-native-paper';


const Stack = createNativeStackNavigator();


function App(): React.JSX.Element {


  return (
    <LocalizationProvider>
      <PaperProvider>
      <NavigationContainer>
        <NetworkLoggerProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name={Routes.TAB}
              component={Dummy}
              options={{ animation: 'slide_from_bottom' }}
            />
            <Stack.Screen
              name={Routes.SCREEN_NETWORK_LOGGER}
              component={ScreenNetworkLogger}
              options={{ animation: 'slide_from_bottom' }}
            />
          </Stack.Navigator>
        </NetworkLoggerProvider>
      </NavigationContainer>
      </PaperProvider>
    </LocalizationProvider>
  );
}

export default App;
