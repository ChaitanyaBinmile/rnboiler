import {StyleSheet} from 'react-native';
import {widthPixel, heightPixel, fontPixel} from '../../theme/Dimension';
import {COLORS} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: widthPixel(20),
    justifyContent: 'center',
    backgroundColor: COLORS.buttonTextWhite,
  },
  checkGroup: {
    marginBottom: heightPixel(20),
  },
  input: {
    fontSize: fontPixel(16),
  },
  checkOption: {
    marginBottom: heightPixel(15),
  },
  errorText: {
    color: COLORS.errorRed,
    fontSize: fontPixel(14),
  },
});