import {StyleSheet} from 'react-native';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../theme/Dimension';
import {COLORS, FONTFAMILY} from '../../theme/theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: pixelSizeHorizontal(20),
    backgroundColor: COLORS.buttonTextWhite,
  },
  autoCompleteContainer: {
    marginBottom: heightPixel(20),
  },
  inputContainer: {
    paddingHorizontal: pixelSizeHorizontal(10),
    paddingVertical: pixelSizeVertical(8),
  },
  list: {
    backgroundColor: COLORS.buttonTextWhite,
    borderRadius: widthPixel(8),
    maxHeight: heightPixel(200),
    marginTop: heightPixel(5),
  },
  errorText: {
    color: COLORS.errorRed,
    marginTop: heightPixel(5),
  },
  listItem: {
    paddingVertical: pixelSizeVertical(10),
    paddingHorizontal: pixelSizeHorizontal(15),
    borderBottomWidth: widthPixel(0.8),
    color: COLORS.defaultBlack,
    fontSize: fontPixel(16),
  },
  formWrapper: {
    padding: pixelSizeHorizontal(20),
  },
  title: {
    fontSize: fontPixel(24),
    fontWeight: 'bold',
    marginBottom: heightPixel(20),
    alignSelf: 'center',
    color: COLORS.defaultBlack,
  },
  submitButton: {
    backgroundColor: COLORS.buttonBlue,
    padding: pixelSizeVertical(10),
    borderRadius: widthPixel(8),
    marginTop: heightPixel(20),
    alignItems: 'center',
  },
  submitButtonText: {
    color: COLORS.buttonTextWhite,
    fontSize: fontPixel(16),
    fontWeight: 'bold',
    fontFamily:FONTFAMILY.poppins_regular,
  },
});

export default styles;
