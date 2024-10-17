import { StyleSheet } from 'react-native';
import { widthPixel, heightPixel, fontPixel, pixelSizeVertical, pixelSizeHorizontal } from '../../theme/Dimension'; 

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
  checkOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: heightPixel(12),
  },
  checkCircle: {
    height: widthPixel(20),
    width: widthPixel(20),
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: widthPixel(10),
  },
  selectedCheckCircle: {
    backgroundColor: '#1876d1',
  },
  selectedCheck: {
    borderColor: '#1876d1',
  },
  checkLabel: {
    fontSize: fontPixel(16),
  },
  selectedOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: heightPixel(10),
  },
  selectedOption: {
    backgroundColor: '#f1f1f1',
    borderRadius: widthPixel(20),
    paddingVertical: heightPixel(5),
    paddingHorizontal: widthPixel(12),
    marginRight: widthPixel(5),
    marginBottom: heightPixel(5),
  },
  selectedOptionText: {
    color: '#000',
    fontSize: fontPixel(14),
  },
  checkmark: {
    color: '#fff',
    fontSize: fontPixel(14),
    fontWeight: 'bold',
    bottom: heightPixel(2),
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
