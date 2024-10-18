import {COLORS, FONTFAMILY} from './../../theme/theme';
import {StyleSheet} from 'react-native';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../theme/Dimension';
const styles = StyleSheet.create({
  container: {
    marginBottom: heightPixel(20),
  },
  label: {
    fontSize: fontPixel(18),
    marginBottom: heightPixel(8),
    color: COLORS.defaultBlack,
    fontFamily:FONTFAMILY.poppins_black
  },
  requiredMark: {
    fontSize: fontPixel(18),
  },
  defaultText: {
    color: COLORS.defaultBlack,
  },
  errorText: {
    color: COLORS.errorRed,
  },
  checkOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: heightPixel(12),
  },
  checkCircle: {
    height: widthPixel(20),
    width: widthPixel(20),
    borderWidth: 1,
    borderColor: COLORS.buttonBorder,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: widthPixel(10),
  },
  selectedCheckCircle: {
    backgroundColor: COLORS.focusBlue,
  },
  selectedCheck: {
    borderColor: COLORS.focusBlue,
  },
  checkLabel: {
    fontSize: fontPixel(16),
  },
  selectedOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: heightPixel(10),
  },
  selectedOption: {
    backgroundColor: COLORS.secondaryLightGreyHex,
    borderRadius: widthPixel(20),
    paddingVertical: heightPixel(5),
    paddingHorizontal: widthPixel(12),
    marginRight: widthPixel(5),
    marginBottom: heightPixel(5),
  },
  selectedOptionText: {
    color: COLORS.defaultBlack,
    fontSize: fontPixel(14),
  },
  checkmark: {
    color: COLORS.buttonTextWhite,
    fontSize: fontPixel(14),
    fontWeight: 'bold',
    bottom: heightPixel(2),
  },
  submitButton: {
    marginTop: heightPixel(24),
    backgroundColor: COLORS.buttonBlue,
    paddingVertical: heightPixel(12),
    borderRadius: widthPixel(8),
    alignItems: 'center',
    marginBottom: heightPixel(20),
  },
  submitButtonText: {
    color: COLORS.buttonTextWhite,
    fontSize: fontPixel(16),
    fontWeight: 'bold',
    fontFamily:FONTFAMILY.poppins_regular,
  },
});

export default styles;
