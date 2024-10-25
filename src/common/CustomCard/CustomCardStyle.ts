import { StyleSheet } from "react-native";
import {normalizeSize} from "../../theme/Dimension";
import { COLORS } from "../../theme/theme";

export const styles = StyleSheet.create({
    card: {
      borderRadius: normalizeSize(10),
      shadowColor: COLORS.defaultBlack,
      shadowOffset: { width: normalizeSize(0), height: normalizeSize(2) },
      shadowOpacity: normalizeSize(0.25),
      shadowRadius: normalizeSize(3.84),
    },
    defaultStyle:{
        margin:normalizeSize(10),
        padding:normalizeSize(10),
        elevation:normalizeSize(10),
        width:normalizeSize(100),
        height:normalizeSize(100),
        backgroundColor:COLORS.errorRed,
    }
   

  });