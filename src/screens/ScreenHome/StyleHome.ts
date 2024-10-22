import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/theme";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.buttonTextWhite, 
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      color: '#333',
    },
  });