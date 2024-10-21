import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/theme";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8', 
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    text: {
      fontSize: 20,
      color: COLORS.primaryGreyHex,
      marginBottom: 20,
    },
    todoItem: {
      padding: 10,
      backgroundColor: COLORS.buttonTextWhite,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.primarySilverBorderHex,
      width: '100%',
      alignItems: 'center',
    },
    todoText: {
      fontSize: 16,
      color: COLORS.primaryGreyHex,
    },
  });

export default styles;