import { StyleSheet } from 'react-native';
import { widthPixel, heightPixel, fontPixel } from '../../theme/Dimension';

const styles = StyleSheet.create({
  container: {
    marginBottom: heightPixel(20),
  },
  label: {
    fontSize: fontPixel(18),
    marginBottom: heightPixel(8),
    color: '#000',
  },
  requiredMark: {
    fontSize: fontPixel(18),
  },
  defaultText: {
    color: '#000',
  },
  errorText: {
    color: 'red',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: heightPixel(12),
  },
  radioCircle: {
    height: widthPixel(20),
    width: widthPixel(20),
    borderRadius: widthPixel(10),
    borderWidth: widthPixel(2),  
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: widthPixel(10),
    position: 'relative', 
  },
  innerCircle: {
    height: widthPixel(12),  
    width: widthPixel(12),   
    borderRadius: widthPixel(6), 
    backgroundColor: '#1876d1', 
  },
  selectedRadioCircle: {
    borderColor: '#1876d1',  
  },
  selectedRadio: {
    borderColor: '#1876d1',
  },
  radioLabel: {
    fontSize: fontPixel(16),
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
