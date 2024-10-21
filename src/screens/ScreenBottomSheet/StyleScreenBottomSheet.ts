import {COLORS} from './../../theme/theme';
import {StyleSheet} from 'react-native';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../theme/Dimension';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.buttonTextWhite,
  },
  addButton: {
    backgroundColor: COLORS.buttonBlue,
    padding: pixelSizeVertical(15),
    borderRadius: widthPixel(10),
  },
  addButtonText: {
    color: COLORS.buttonTextWhite,
    fontSize: fontPixel(18),
  },
});
