import { StyleSheet } from 'react-native';
import { widthPixel, heightPixel, fontPixel, pixelSizeHorizontal, pixelSizeVertical } from '../../theme/Dimension';
const styles = StyleSheet.create({
  container: {
    marginBottom: heightPixel(20), 
  },
  label: {
    fontSize: fontPixel(16), 
    marginBottom: heightPixel(5), 
  },
  labelText: {
    color: '#000',
  },
  errorText: {
    color: 'red',
  },
  asterisk: {
    color: '#000',
  },
  errorAsterisk: {
    color: 'red',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: widthPixel(2), 
    padding: pixelSizeVertical(8), 
    borderRadius: widthPixel(8), 
    flexWrap: 'wrap',
  },
  chipInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 1,
  },
  blurBorder: {
    borderColor: '#adb5bd',
  },
  focusBorder: {
    borderColor: '#1876d1',
  },
  errorBorder: {
    borderColor: 'red',
  },
  textInput: {
    fontSize: fontPixel(16), 
    color: '#000',
    paddingLeft: pixelSizeHorizontal(8), 
    flex: 1,
    minWidth: widthPixel(50), 
  },
  textInputWithChips: {
    flex: 1,
  },
  disabledTextInput: {
    backgroundColor: '#e0e0e0',
  },
  clearwrapper: {
    backgroundColor: '#f1f1f1',
    borderRadius: widthPixel(25), 
  },
  clearButton: {
    padding: pixelSizeHorizontal(5),
  },
  clearText: {
    color: '#343a40',
    fontSize: fontPixel(14),
  },
  requiredMark: {
    fontSize: fontPixel(18), 
  },
  defaultText: {
    color: '#000',
  },
  listContainer: {
    maxHeight: heightPixel(200), 
    borderWidth: widthPixel(1), 
    borderColor: '#ccc',
    borderRadius: widthPixel(8), 
    marginTop: heightPixel(5), 
    backgroundColor: '#fff',
    zIndex: 1,
  },
  dropdownItem: {
    padding: pixelSizeVertical(10), 
    fontSize: fontPixel(16), 
    fontWeight: 'bold',
    color: '#000',
    borderBottomWidth: widthPixel(1), 
    borderBottomColor: '#ccc',
    marginHorizontal: pixelSizeHorizontal(5), 
  },
  selectedChip: {
    backgroundColor: '#f1f1f1',
    borderRadius: widthPixel(20), 
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(10), 
    paddingVertical: pixelSizeVertical(5), 
    marginRight: pixelSizeHorizontal(5), 
    marginBottom: pixelSizeVertical(5),
  },
  chipText: {
    marginRight: pixelSizeHorizontal(5), 
    fontSize: fontPixel(14), 
  },
  chipRemove: {
    color: '#343a40',
    fontWeight: 'bold',
  },
  submitErrorText: {
    color: 'red',
    marginTop: heightPixel(5), 
  },
  errorMark: {
    color: 'red',
  },
  submitButton: {
    marginTop: heightPixel(10), 
    backgroundColor: '#1876d1',
    paddingVertical: pixelSizeVertical(10), 
    paddingHorizontal: pixelSizeHorizontal(20), 
    borderRadius: widthPixel(8), 
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: fontPixel(16), 
    fontWeight: 'bold',
  },
});

export default styles;
