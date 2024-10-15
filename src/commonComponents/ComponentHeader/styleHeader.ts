import { StyleSheet, Platform } from 'react-native';
import { heightPixel, widthPixel } from '../../theme/Dimension';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    height: 'auto',
    paddingHorizontal: widthPixel(20),
    marginTop:heightPixel(16),
  },
  
});
export default styles;
