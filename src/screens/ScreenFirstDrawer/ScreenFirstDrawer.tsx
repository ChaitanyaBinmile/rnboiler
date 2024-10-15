import { Text, View } from "react-native"
import ComponentHeader from "../../commonComponents/ComponentHeader/ComponentHeader"
import Icons from "../../assets/images/svgIcons/SvgData"
import { DrawerActions, useNavigation } from "@react-navigation/native"

const ScreenFirstDrawer=()=>{
    const navigation=useNavigation()
    const handleDrawer=()=>{
      navigation.dispatch(DrawerActions.openDrawer())
    }
    return(
        <View>
                  <ComponentHeader title='home page' leftIcon={<Icons.MenuIcon/>} onIconPress={handleDrawer}/>

            <Text>FirstDrawer</Text>
        </View>
    )
    }
    export default ScreenFirstDrawer