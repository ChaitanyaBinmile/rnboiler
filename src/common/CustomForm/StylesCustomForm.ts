import { StyleSheet } from 'react-native';
import { widthPixel, heightPixel, fontPixel, pixelSizeVertical, pixelSizeHorizontal } from '../../theme/Dimension'; 

const styles = StyleSheet.create({
  formContainer: {
    padding: pixelSizeVertical(10),
  },
  fieldContainer: {
    marginBottom: heightPixel(16),
    width: '100%',
  },
  WrapperView: {
    backgroundColor: '#fff',
    borderRadius: widthPixel(5),
    padding: pixelSizeVertical(10),
  },
  datePickerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  datePickerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightPixel(20),
  },
  confirmButton: {
    backgroundColor: '#1876d1',
    padding: pixelSizeVertical(10),
    borderRadius: widthPixel(5),
    marginRight: widthPixel(20),
  },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: pixelSizeVertical(10),
    borderRadius: widthPixel(5),
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
    fontSize: fontPixel(16),
    fontWeight: 'bold',
    marginBottom: heightPixel(8),
    color: '#333',
  },
  required: {
    color: 'black', 
  },
  errorText: {
    color: 'red',
  },
  defaultText: {
    color: 'black', 
  },
  errorLabel: {
    color: 'red', 
  },
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: widthPixel(8),
    paddingHorizontal: pixelSizeHorizontal(8),
    borderWidth: widthPixel(1),
    borderColor: '#ccc', 
  },
  input: {
    flex: 1,
    height: heightPixel(60),
    fontSize: fontPixel(16),
    paddingLeft: widthPixel(12),
    color: '#333',
  },
  focusedInputWrapper: {
    borderWidth: widthPixel(2),
    borderColor: '#1876d1', 
    borderRadius: widthPixel(8),
  },
  errorInputWrapper: {
    borderWidth: widthPixel(2),
    borderColor: 'red', 
    borderRadius: widthPixel(8),
  },
  submitButton: {
    marginTop: heightPixel(24),
    backgroundColor: '#004CFFFF',
    paddingVertical: heightPixel(12),
    borderRadius: widthPixel(8),
    alignItems: 'center',
    marginBottom: heightPixel(20),
  },
  submitButtonText: {
    color: '#fff',
    fontSize: fontPixel(16),
    fontWeight: 'bold',
  },
});

export default styles;
