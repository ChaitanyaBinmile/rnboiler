import {StyleSheet} from 'react-native';
import { pixelSizeVertical,heightPixel } from '../../theme/Dimension';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:pixelSizeVertical(20),
  },
  textInput:{
    borderWidth: 1, 
    marginTop: heightPixel(10), 
    padding: pixelSizeVertical(5), 
  }
});
