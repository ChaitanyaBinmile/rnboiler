import { StyleSheet } from 'react-native';
import { widthPixel, heightPixel, fontPixel, pixelSizeHorizontal, pixelSizeVertical } from '../../theme/Dimension'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: pixelSizeHorizontal(20), 
    backgroundColor: '#fff',
  },
  autoCompleteContainer: {
    marginBottom: heightPixel(20), 
  },
  inputContainer: {
    paddingHorizontal: pixelSizeHorizontal(10), 
    paddingVertical: pixelSizeVertical(8),
  },
  list: {
    backgroundColor: '#fff',
    borderRadius: widthPixel(8),
    maxHeight: heightPixel(200), 
    marginTop: heightPixel(5), 
  },
  errorText: {
    color: 'red',
    marginTop: heightPixel(5), 
  },
  listItem: {
    paddingVertical: pixelSizeVertical(10),
    paddingHorizontal: pixelSizeHorizontal(15), 
    borderBottomWidth: widthPixel(0.8), 
    borderBottomColor: '#eee',
    color: '#000',
    fontSize: fontPixel(16), 
  },
  greetingText: {
    alignSelf: 'center',
    fontSize: fontPixel(18), 
    fontWeight: 'bold',
    marginVertical: heightPixel(20),
  },
  formWrapper: {
    padding: pixelSizeHorizontal(20), 
  },
  title: {
    fontSize: fontPixel(24), 
    fontWeight: 'bold',
    marginBottom: heightPixel(20), 
    alignSelf: 'center',
    color: '#000',
  },
  submitButton: {
    backgroundColor: '#032209FF',
    padding: pixelSizeVertical(10), 
    borderRadius: widthPixel(8), 
    marginTop: heightPixel(20),
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: fontPixel(16), 
    fontWeight: 'bold',
  },
});

export default styles;
