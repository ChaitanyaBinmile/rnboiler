import {  createDrawerNavigator } from "@react-navigation/drawer"
import { DrawerStackParamList } from "../type"
import ScreenFirstDrawer from "../../screens/ScreenFirstDrawer/ScreenFirstDrawer"
import ScreenSecondDrawer from "../../screens/ScreenSecondDrawer/ScreenSecondDrawer"
import DrawerRoute from "./DrawerRouteName"
import Home from "../../screens/home/Home"

function RouteDrawer(){
    const DrawerStack= createDrawerNavigator<DrawerStackParamList>()
    return(
        <DrawerStack.Navigator  initialRouteName={DrawerRoute.HOMES}>
            <DrawerStack.Screen name={DrawerRoute.ScreenFirstDrawer} component={ScreenFirstDrawer}/>
            <DrawerStack.Screen name={DrawerRoute.ScreenSecondDrawer} component={ScreenSecondDrawer}/>
            <DrawerStack.Screen name={DrawerRoute.HOMES} component={Home} />

        </DrawerStack.Navigator>
    )
}
export default RouteDrawer