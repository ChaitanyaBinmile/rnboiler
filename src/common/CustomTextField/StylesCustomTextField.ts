import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      color: '#333',
    },
    required: {
      color: 'red',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textInput: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      borderRadius: 8,
      fontSize: 16,
    },
    icon: {
      marginHorizontal: 8,
    },
    emailInput: {
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        padding: 10,
      },
    errorText: {
      color: 'red',
      marginTop: 5,
      fontSize: 14,
    },
  });

  export default styles;