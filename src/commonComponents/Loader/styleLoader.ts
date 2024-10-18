import { StyleSheet } from 'react-native';
import { ColorThemeLight } from '../../util/AppStyles';

export default StyleSheet.create({
  activityIndicatorWrapper: {
    alignItems: 'center',
    backgroundColor: ColorThemeLight.WHITE,
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
