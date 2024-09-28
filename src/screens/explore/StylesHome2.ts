import { StyleSheet } from "react-native";

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
      color: '#333',
      marginBottom: 20,
    },
    todoItem: {
      padding: 10,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      width: '100%',
      alignItems: 'center',
    },
    todoText: {
      fontSize: 16,
      color: '#333',
    },
    emailInput: {
      borderBottomWidth: 2,
      borderBottomColor: '#000',
      padding: 10,
    },
    labelStyle: {
      fontWeight: 'bold',
      fontSize: 32,
      marginBottom: 5,
    },
    customContainer: {
      marginBottom: 15,
      width: '80%',
      left: '10%',
    },
    customInput: {
    },
    customError: {
      color: 'red',
      fontSize: 12,
      fontWeight: 'bold',
    },
  });

export default styles;