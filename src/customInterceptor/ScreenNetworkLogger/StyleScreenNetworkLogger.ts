import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  backText: {
    color: COLORS.primaryRedHex,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
