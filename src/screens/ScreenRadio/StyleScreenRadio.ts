import { StyleSheet } from "react-native";
import { widthPixel, heightPixel, fontPixel, pixelSizeVertical, pixelSizeHorizontal } from '../../theme/Dimension'; 

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: pixelSizeHorizontal(20),
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  radioGroup: {
    marginBottom: heightPixel(20),
  },
  input: {
    fontSize: fontPixel(16),
  },
  radioOption: {
    marginBottom: heightPixel(15),
  },
  errorText: {
    color: 'red',
    fontSize: fontPixel(14), 
  },
});
