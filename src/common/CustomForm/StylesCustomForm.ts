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
  formContainer: {
    padding: pixelSizeVertical(10),
  },
  fieldContainer: {
    marginBottom: heightPixel(16),
    width: '100%',
  },
  WrapperView: {
    backgroundColor: COLORS.buttonTextWhite,
    borderRadius: widthPixel(5),
    padding: pixelSizeVertical(10),
  },
  datePickerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondaryBlackRGBA,
  },
  datePickerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightPixel(20),
  },
  confirmButton: {
    backgroundColor: COLORS.buttonBlue,
    padding: pixelSizeVertical(10),
    borderRadius: widthPixel(5),
    marginRight: widthPixel(20),
  },
  cancelButton: {
    backgroundColor: COLORS.buttonBorder,
    padding: pixelSizeVertical(10),
    borderRadius: widthPixel(5),
  },
  buttonText: {
    color: COLORS.buttonTextWhite,
    fontWeight: 'bold',
  },
  label: {
    fontSize: fontPixel(16),
    fontWeight: 'bold',
    marginBottom: heightPixel(8),
    color: COLORS.primaryGreyHex,
    fontFamily:FONTFAMILY.poppins_black
  },
  required: {
    color: COLORS.primaryBlackHex,
  },
  errorText: {
    color: COLORS.errorRed,
  },
  defaultText: {
    color: COLORS.primaryBlackHex,
  },
  errorLabel: {
    color: COLORS.errorRed,
  },
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: widthPixel(8),
    paddingHorizontal: pixelSizeHorizontal(8),
    borderWidth: widthPixel(1),
    borderColor: COLORS.buttonBorder,
  },
  input: {
    flex: 1,
    height: heightPixel(60),
    fontSize: fontPixel(16),
    paddingLeft: widthPixel(12),
    color: COLORS.primaryGreyHex,
  },
  focusedInputWrapper: {
    borderWidth: widthPixel(2),
    borderColor: COLORS.focusBlue,
    borderRadius: widthPixel(8),
  },
  errorInputWrapper: {
    borderWidth: widthPixel(2),
    borderColor: COLORS.errorRed,
    borderRadius: widthPixel(8),
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
