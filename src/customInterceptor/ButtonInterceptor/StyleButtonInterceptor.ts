import { Dimensions, StyleSheet } from 'react-native';

// TODO : we will remove this after adding Dimensions common component.
const { height } = Dimensions.get('window');

const btnDimensions = 44;
const styles = StyleSheet.create({
  buttonStyle: {
    position: 'absolute',
    right: 10,
    top: height / 2,
    zIndex: 99,
  },
  containerStyle: {
    width: btnDimensions,
    height: btnDimensions,
    borderRadius: btnDimensions / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    // TODO : we will add fontFamily after adding fontFamily common component.
    // fontFamily: fontFamily.InterBold,
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  versionTextStyle: {
    // TODO : we will add fontFamily after adding fontFamily common component.
    // fontFamily: fontFamily.InterBold,
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
  },
});

export default styles;
