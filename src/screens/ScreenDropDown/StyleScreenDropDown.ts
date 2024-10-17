import { StyleSheet } from 'react-native';
import { widthPixel, heightPixel, pixelSizeVertical, pixelSizeHorizontal } from '../../theme/Dimension'; 

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: pixelSizeVertical(20),
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    dropdown: {
      marginBottom: heightPixel(20),
    },
});

