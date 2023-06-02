import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001B2B',
  },
  title: {
    color: '#49E9FF',
    fontFamily: theme.fonts.bold,
    fontSize: RFPercentage(1.8),
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#49E9FF',
    padding: 15,
    paddingHorizontal: 35,
    borderRadius: 8,
    marginTop: 55,
  },
  buttonTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: RFPercentage(1.8),
  },
  logo: {
    width: 250,
    height: 100,
    marginBottom: 50,
  },
});
