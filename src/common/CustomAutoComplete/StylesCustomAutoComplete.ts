import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  autoCompleteContainer: {
    flex: 1,
    zIndex: 1,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#adb5bd',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  textInput: {
    color: '#000', 
    fontSize: 16,
    marginLeft: 10,
  },
  listContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    maxHeight: 200, 
    backgroundColor: '#fff', 
  },
  list: {
    backgroundColor: '#fff', 
    borderRadius: 8,
  },
  resultItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: '#000', 
    fontSize: 16,
  },
});

export default styles;
