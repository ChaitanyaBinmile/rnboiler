import {StyleSheet} from 'react-native';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../theme/Dimension';
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
  focusText: {
    color: COLORS.focusBlue,
  },
  errorText: {
    color: COLORS.errorRed,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: widthPixel(1),
    padding: pixelSizeVertical(12),
    borderRadius: widthPixel(8),
  },
  selectedBorder: {
    borderColor: COLORS.focusBlue,
    borderWidth: widthPixel(2),
  },
  blurBorder: {
    borderColor: COLORS.primaryGreyHex,
  },
  focusBorder: {
    borderColor: COLORS.focusBlue,
    borderWidth: widthPixel(2),
  },
  errorBorder: {
    borderColor: COLORS.errorRed,
    borderWidth: widthPixel(2),
  },
  inputText: {
    fontSize: fontPixel(18),
    color: COLORS.defaultBlack,
    flex: 1,
  },
  clearButton: {
    marginLeft: widthPixel(8),
  },
  clearText: {
    color: COLORS.removeOption,
  },
  dropdown: {
    borderWidth: widthPixel(1),
    borderColor: COLORS.buttonBorder,
    backgroundColor: COLORS.primaryWhiteHex,
    borderRadius: widthPixel(8),
  },
  dropdownItem: {
    padding: pixelSizeVertical(15),
    fontSize: fontPixel(18),
    color: COLORS.defaultBlack,
  },
  selectedItemText: {
    color: COLORS.focusBlue,
  },
  optionSeparator: {
    height: heightPixel(1),
    backgroundColor: COLORS.buttonBorder,
    marginHorizontal: widthPixel(10),
  },
  selectedOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: heightPixel(5),
  },
  selectedOption: {
    backgroundColor: COLORS.secondaryLightGreyHex,
    borderRadius: widthPixel(20),
    paddingVertical: heightPixel(8),
    paddingHorizontal: widthPixel(14),
    marginRight: widthPixel(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedOptionText: {
    marginRight: widthPixel(5),
    fontSize: fontPixel(14),
    marginHorizontal: widthPixel(5),
  },
  removeOptionText: {
    color: COLORS.removeOption,
    fontWeight: 'bold',
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
