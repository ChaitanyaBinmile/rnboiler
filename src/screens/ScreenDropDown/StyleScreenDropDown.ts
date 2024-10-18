import {StyleSheet} from 'react-native';
import {
  widthPixel,
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../theme/Dimension';
import {COLORS} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: pixelSizeVertical(20),
    justifyContent: 'center',
    backgroundColor: COLORS.buttonTextWhite,
  },
  dropdown: {
    marginBottom: heightPixel(20),
  },
});
