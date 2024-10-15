import React from 'react';
import { LocalizationProvider } from './src/utils/CommonContext/LocalizationProvider';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dummy from './src/screens/dummy/Dummy';
import { NavigationContainer } from '@react-navigation/native';
import { NetworkLoggerProvider } from './src/networkLogger/NetworkProvider';
import { ScreenNetworkLogger } from './src/customInterceptor/ScreenNetworkLogger/ScreenNetworkLogger';
import { Provider } from 'react-redux';
import store from './src/services/redux/store/store';  
import UserRoute from './src/routes/RoutesUser/UserRouteName';
import RouteManager from './src/routes/RouteManager';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
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
  );
}

export default App;
