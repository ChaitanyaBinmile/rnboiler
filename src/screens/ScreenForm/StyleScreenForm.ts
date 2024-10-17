import { StyleSheet } from 'react-native';
import { widthPixel, heightPixel, fontPixel, pixelSizeVertical, pixelSizeHorizontal } from '../../theme/Dimension'; 

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: pixelSizeVertical(20),
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    greetingText: {
      alignSelf: 'center',
      fontSize: fontPixel(18),
      fontWeight: 'bold',
      marginVertical: heightPixel(20),
    },
    formWrapper: {
      padding: pixelSizeVertical(20),
    },
    title: {
      fontSize: fontPixel(24),
      fontWeight: 'bold',
      marginBottom: heightPixel(20),
    },
    input: {
      fontSize: fontPixel(16),
    },
    errorText: {
      color: 'red',
    },
});
