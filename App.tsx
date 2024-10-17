import React from 'react';
import { LocalizationProvider } from './src/utils/CommonContext/LocalizationProvider';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { NetworkLoggerProvider } from './src/networkLogger/NetworkProvider';
import { ScreenNetworkLogger } from './src/customInterceptor/ScreenNetworkLogger/ScreenNetworkLogger';
import { Provider } from 'react-redux';
import store from './src/services/redux/store/store';  

import UserRoute from './src/routes/RoutesUser/UserRouteName';
import RouteManager from './src/routes/RouteManager';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (

    <SafeAreaProvider>

    <GestureHandlerRootView style={{flex:1}}>

    <Provider store={store}> 
      <LocalizationProvider>
        <NavigationContainer>
          <NetworkLoggerProvider>

            {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name={UserRoute.TAB}
                component={Dummy}
                options={{ animation: 'slide_from_bottom' }}
              />
              <Stack.Screen
                name={UserRoute.SCREEN_NETWORK_LOGGER}
                component={ScreenNetworkLogger}
                options={{ animation: 'slide_from_bottom' }}
              />
            </Stack.Navigator> */}
            <RouteManager/>
          </NetworkLoggerProvider>
        </NavigationContainer>
      </LocalizationProvider>
    </Provider>
    </GestureHandlerRootView>
    </SafeAreaProvider>

  );
}

export default App;
