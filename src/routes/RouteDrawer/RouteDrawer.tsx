import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerStackParamList} from '../type';
import ScreenFirstDrawer from '../../screens/ScreenFirstDrawer/ScreenFirstDrawer';
import ScreenSecondDrawer from '../../screens/ScreenSecondDrawer/ScreenSecondDrawer';
import DrawerRoute from './DrawerRouteName';
import ScreenHome from '../../screens/ScreenHome/ScreenHome';
import BottomTabs from '../RouteTabs/BottomTabs';

function RouteDrawer() {
  const DrawerStack = createDrawerNavigator<DrawerStackParamList>();
  return (
    <DrawerStack.Navigator
      initialRouteName={DrawerRoute.BottomTabStack}
      screenOptions={{
        headerShown: false,
      }}>
      <DrawerStack.Screen name={DrawerRoute.HOMES} component={ScreenHome} />
      <DrawerStack.Screen
        name={DrawerRoute.ScreenFirstDrawer}
        component={ScreenFirstDrawer}
      />
      <DrawerStack.Screen
        name={DrawerRoute.ScreenSecondDrawer}
        component={ScreenSecondDrawer}
      />
      <DrawerStack.Screen
        name={DrawerRoute.BottomTabStack}
        component={BottomTabs}
      />
    </DrawerStack.Navigator>
  );
}
export default RouteDrawer;
