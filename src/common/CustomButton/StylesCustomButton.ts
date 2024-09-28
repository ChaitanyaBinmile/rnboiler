import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  buttonBase: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  primaryButton: {
    backgroundColor: '#3498db',
  },
  secondaryButton: {
    backgroundColor: '#2ecc71',
  },
  dangerButton: {
    backgroundColor: '#e74c3c',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#3498db',
  },
  textButton: {
    backgroundColor: 'transparent',
  },
  successButton: {
    backgroundColor: '#2ecc71',
  },
  warningButton: {
    backgroundColor: '#e67e22',
  },
  infoButton: {
    backgroundColor: '#3498db',
  },
  smallButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  mediumButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  largeButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 12,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 20,
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
