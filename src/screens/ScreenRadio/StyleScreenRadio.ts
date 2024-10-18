import {StyleSheet} from 'react-native';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../theme/Dimension';
import {COLORS} from '../../theme/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: pixelSizeHorizontal(20),
    justifyContent: 'center',
    backgroundColor: COLORS.buttonTextWhite,
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
    color: COLORS.errorRed,
    fontSize: fontPixel(14),
  },
});
