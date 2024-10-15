import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/theme';

export default StyleSheet.create({
  activityIndicatorWrapper: {
    alignItems: 'center',
    backgroundColor: COLORS.primaryWhiteHex,
    borderRadius: 10,
    height: 100,
    justifyContent: 'center',
    width: 100,
  },
  modalBackground: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'center',
  },
});
