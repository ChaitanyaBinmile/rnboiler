import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { BottomTabParamList } from "../type"
import ScreenDummy from "../../screens/ScreenDummy/ScreenDummy";
import ScreenHome from "../../screens/ScreenHome/ScreenHome";
import HomeActiveSvg from "../../assets/icons/BottomTabIcons/HomeActiveSvg";
import MaterialsActiveSvg from "../../assets/icons/BottomTabIcons/MaterialsActiveSvg";
import { COLORS } from "../../theme/theme";
import BottomTabStyle from "./BottomTabStyle";
import BottomTabName from "./BottomTabName";

const BottomTabs=()=>{
    const Tab= createBottomTabNavigator<BottomTabParamList>();
    return(
        <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: BottomTabStyle.tabBarStyle,
        }}>
        <Tab.Screen
          name={BottomTabName.HOMESS}
          component={ScreenHome}
          options={{
            tabBarIcon: ({focused}) => (
              <HomeActiveSvg
                color={focused ? COLORS.primaryBlackHex : COLORS.primaryBlackRGBA}
              />
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name={BottomTabName.SCREEN_DUMMY}
          component={ScreenDummy}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialsActiveSvg
                color={focused ? COLORS.primaryBlackHex : COLORS.primaryBlackRGBA}
              />
            ),
          }}></Tab.Screen>
      </Tab.Navigator>
    )
}
export default BottomTabs