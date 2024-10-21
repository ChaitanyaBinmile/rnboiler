import {StyleSheet} from 'react-native';
import {widthPixel, heightPixel, fontPixel} from '../../theme/Dimension';
import {COLORS, FONTFAMILY} from '../../theme/theme';
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
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: heightPixel(12),
  },
  radioCircle: {
    height: widthPixel(20),
    width: widthPixel(20),
    borderRadius: widthPixel(10),
    borderWidth: widthPixel(2),
    borderColor: COLORS.primarySilverBorderHex,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: widthPixel(10),
    position: 'relative',
  },
  innerCircle: {
    height: widthPixel(12),
    width: widthPixel(12),
    borderRadius: widthPixel(6),
    backgroundColor: COLORS.focusBlue,
  },
  selectedRadioCircle: {
    borderColor: COLORS.focusBlue,
  },
  selectedRadio: {
    borderColor: COLORS.focusBlue,
  },
  radioLabel: {
    fontSize: fontPixel(16),
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
