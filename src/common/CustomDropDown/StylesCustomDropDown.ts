import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18, // Increased font size
    marginBottom: 8,
    color: '#000',
  },
  requiredMark: {
    fontSize: 18, // Increased to match label size
  },
  defaultText: {
    color: '#000', // Default color
  },
  focusText: {
    color: '#1876d1', // Blue color on focus
  },
  errorText: {
    color: 'red', // Red color for error
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },
  selectedBorder: {
    borderColor: '#1876d1',
    borderWidth: 2,
  },
  blurBorder: {
    borderColor: 'grey',
  },
  focusBorder: {
    borderColor: '#1876d1', // Blue color when focused
    borderWidth: 2,
  },
  errorBorder: {
    borderColor: 'red',
    borderWidth: 2,
  },
  inputText: {
    fontSize: 18, 
    color: '#000',
    flex: 1,
  },
  clearButton: {
    marginLeft: 8,
  },
  clearText: {
    color: '#6c757d',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  dropdownItem: {
    padding: 15, 
    fontSize: 18, 
    color: '#000',
  },
  selectedItemText: {
    color: '#1876d1', // Selected item in blue color
  },
  optionSeparator: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
});

export default styles;
