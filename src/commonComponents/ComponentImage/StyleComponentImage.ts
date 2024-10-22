import {StyleSheet} from 'react-native';
import {
  fontPixel,
  heightPixel,
  normalizeSize,
  screenWidth,
  widthPixel,
} from '../../theme/Dimension';
import {FontTheme} from '../../utils/AppStyles';
import {COLORS} from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: heightPixel(20),
  },
  greyContainer: {
    backgroundColor: COLORS.secondaryLightGreyHex,
    width: screenWidth - widthPixel(40),
    height: heightPixel(180),
    marginBottom: heightPixel(20),
    borderRadius: normalizeSize(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderWidth: heightPixel(1),
    borderColor: COLORS.defaultBlack,
  },
  image: {
    width: screenWidth - widthPixel(40),
    height: heightPixel(180),
    marginBottom: heightPixel(20),
    resizeMode: 'cover',
    borderRadius: normalizeSize(10),
  },
  uploadTextStyle: {
    fontSize: fontPixel(16),
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: FontTheme.MEDIUM,
    color: COLORS.defaultBlack,
  },
  uploadButtonStyle: {
    backgroundColor: COLORS.defaultBlack,
    width: widthPixel(150),
    borderRadius: normalizeSize(5),
    height: heightPixel(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButtonText: {
    color: COLORS.primaryWhiteHex,
    fontSize: fontPixel(14),
    fontWeight: '500',
    fontFamily: FontTheme.MEDIUM,
    textAlign: 'center',
  },
  rowContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: screenWidth - widthPixel(40),
  }
});
export default styles;
