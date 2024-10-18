import {StyleSheet} from 'react-native';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../theme/Dimension';
import {COLORS} from '../../theme/theme';
import { FONTFAMILY } from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    marginBottom: heightPixel(20),
  },
  label: {
    fontSize: fontPixel(16),
    marginBottom: heightPixel(5),
    fontFamily:FONTFAMILY.poppins_black
  },
  labelText: {
    color: COLORS.defaultBlack,
  },
  errorText: {
    color: COLORS.errorRed,
  },
  asterisk: {
    color: COLORS.defaultBlack,
  },
  errorAsterisk: {
    color: COLORS.errorRed,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: widthPixel(2),
    padding: pixelSizeVertical(8),
    borderRadius: widthPixel(8),
    flexWrap: 'wrap',
  },
  chipInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 1,
  },
  blurBorder: {
    borderColor: COLORS.secondaryLightGreyHex,
  },
  focusBorder: {
    borderColor: COLORS.focusBlue,
  },
  errorBorder: {
    borderColor: COLORS.errorRed,
  },
  textInput: {
    fontSize: fontPixel(16),
    color: COLORS.defaultBlack,
    paddingLeft: pixelSizeHorizontal(8),
    flex: 1,
    minWidth: widthPixel(50),
  },
  textInputWithChips: {
    flex: 1,
  },
  disabledTextInput: {
    backgroundColor: COLORS.secondaryLightGreyHex,
  },
  clearwrapper: {
    backgroundColor: COLORS.secondaryLightGreyHex,
    borderRadius: widthPixel(25),
  },
  clearButton: {
    padding: pixelSizeHorizontal(5),
  },
  clearText: {
    color: COLORS.removeOption,
    fontSize: fontPixel(14),
  },
  requiredMark: {
    fontSize: fontPixel(18),
  },
  defaultText: {
    color: COLORS.defaultBlack,
  },
  listContainer: {
    maxHeight: heightPixel(200),
    borderWidth: widthPixel(1),
    borderColor: COLORS.buttonBorder,
    borderRadius: widthPixel(8),
    marginTop: heightPixel(5),
    backgroundColor: COLORS.buttonTextWhite,
    zIndex: 1,
  },
  dropdownItem: {
    padding: pixelSizeVertical(10),
    fontSize: fontPixel(16),
    fontWeight: 'bold',
    color: COLORS.defaultBlack,
    borderBottomWidth: widthPixel(1),
    borderBottomColor: COLORS.buttonBorder,
    marginHorizontal: pixelSizeHorizontal(5),
  },
  selectedChip: {
    backgroundColor: COLORS.secondaryLightGreyHex,
    borderRadius: widthPixel(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(10),
    paddingVertical: pixelSizeVertical(5),
    marginRight: pixelSizeHorizontal(5),
    marginBottom: pixelSizeVertical(5),
  },
  chipText: {
    marginRight: pixelSizeHorizontal(5),
    fontSize: fontPixel(14),
  },
  chipRemove: {
    color: COLORS.removeOption,
    fontWeight: 'bold',
  },
  submitErrorText: {
    color: COLORS.errorRed,
    marginTop: heightPixel(5),
  },
  errorMark: {
    color: COLORS.errorRed,
  },
  submitButton: {
    marginTop: heightPixel(10),
    backgroundColor: COLORS.focusBlue,
    paddingVertical: pixelSizeVertical(10),
    paddingHorizontal: pixelSizeHorizontal(20),
    borderRadius: widthPixel(8),
    alignItems: 'center',
  },
  submitButtonText: {
    color: COLORS.buttonTextWhite,
    fontSize: fontPixel(16),
    fontWeight: 'bold',
    fontFamily:FONTFAMILY.poppins_regular
  },
});

export default styles;
