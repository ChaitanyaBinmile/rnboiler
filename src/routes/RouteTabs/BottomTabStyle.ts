import { StyleSheet } from "react-native";
import { heightPixel } from "../../theme/Dimension";

const BottomTabStyle = StyleSheet.create({
        tabBarStyle: {
          height: heightPixel(80),
          position: 'absolute',
          // backgroundColor: COLORS.primaryBlackRGBA,
          borderTopWidth: 0,
          elevation: 0,
          // borderTopColor: COLORS.transparent,
        },
        BlurViewStyles: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
  });

export default BottomTabStyle;