import {ParamListBase} from '@react-navigation/native'
export interface DrawerStackParamList extends ParamListBase{
ScreenFirstDrawer: undefined,
ScreenSecondDrawer: undefined,
HOMES: undefined,
}
export interface GuestStackParamList extends ParamListBase {
    ScreenLogIn: undefined;
  };
  export interface UserStackParamList extends ParamListBase {
    BottomTabStack: undefined;
    ScreenNetworkLogger: undefined;
    ScreenBottomTab: undefined;
  };
  
  export interface BottomTabParamList extends ParamListBase {
    ScreenHome: undefined;
    ScreenMaterials: undefined;
  };
  
  export type GuestProps = {
    show: boolean;
  };
  
  export type UserProps = {
    show: boolean;
  };
  export type NavigationType = NativeStackNavigationProp<UserStackParamList | GuestStackParamList>;