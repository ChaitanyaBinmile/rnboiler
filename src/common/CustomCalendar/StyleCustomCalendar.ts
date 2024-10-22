import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/theme";
import { fontPixel, normalizeSize,heightPixel} from "../../theme/Dimension";
import { FONTFAMILY } from "../../theme/theme";
export const styles = StyleSheet.create({
  calendarContainer: {
    padding: normalizeSize(10),
  },
  selectedColor: {
    backgroundColor: COLORS.buttonBlue, 
  },
  selectedTextColor: {
    color: COLORS.buttonTextWhite, 
  },
  weekdayColor: {
    color: COLORS.defaultBlack,
  },
  weekendColor: {
    color: COLORS.errorRed, 
  },
  arrowStyle: {
    fontSize: fontPixel(20),
    color: COLORS.primaryBlackRGBA, 
  },
  calendarBackground:{
    color:COLORS.buttonTextWhite,
  },
  textDayFontSize:{
    fontSize:fontPixel(16),
  },
  weekdayText:{
  fontSize: fontPixel(1),
  },
  arrowColor:{
    color:COLORS.primaryBlackRGBA,
  },
  monthTextColor:{
    color:'green'
  },
  childrenContainer:{
    marginTop: heightPixel(20),
    alignItems: 'center',
  }
});
