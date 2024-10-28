import {StyleSheet} from 'react-native';
import {
  fontPixel,
  heightPixel,
  normalizeSize,
  widthPixel,
} from '../../theme/Dimension';
import {COLORS} from '../../theme/theme';
import {FontTheme} from '../../utils/AppStyles';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: heightPixel(400),
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.buttonTextWhite,
    borderTopEndRadius: normalizeSize(20),
    borderTopStartRadius: normalizeSize(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.defaultBlack,
    textAlign: 'center',
    fontSize: fontPixel(14),
    fontFamily: FontTheme.MEDIUM,
    fontWeight: '500',
  },
  titleText: {
    color: COLORS.defaultBlack,
    textAlign: 'center',
    fontSize: fontPixel(22),
    fontFamily: FontTheme.BOLD,
    fontWeight: '700',
  },
  noInterNetView: {
    height: heightPixel(200),
    width: widthPixel(300),
    resizeMode: 'contain',
    marginVertical: heightPixel(10),
  },
});
export default styles;
