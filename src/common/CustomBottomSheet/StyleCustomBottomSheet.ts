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
  // modalContainer: {
  //   flex: 1,
  //   backgroundColor: COLORS.secondaryBlackRGBA,
  //   justifyContent: 'flex-end',
  // },
  bottomSheet: {
    backgroundColor: COLORS.buttonTextWhite,
    borderTopLeftRadius: widthPixel(20),
    borderTopRightRadius: widthPixel(20),
  },
  text: {
    fontSize: fontPixel(18),
    marginBottom: pixelSizeVertical(20),
  },
  closeButton: {
    backgroundColor: COLORS.primarySilverBorderHex,
    padding: pixelSizeVertical(10),
    borderRadius: widthPixel(5),
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: fontPixel(16),
  },
});
