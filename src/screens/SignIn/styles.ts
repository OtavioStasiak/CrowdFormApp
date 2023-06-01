import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.white_100,
  },
  header: {
    borderBottomColor: theme.colors.gray_100,
    height: '13%',
    width: '100%',
    borderBottomWidth: 1,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 25,
    fontSize: RFPercentage(2.7),
    fontFamily: theme.fonts.bold,
  },
  inputs: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '20%',
    marginTop: '10%',
    marginBottom: '8%',
  },
  registerText: {
    fontFamily: theme.fonts.light,
    color: theme.colors.gray_300,
    fontSize: RFPercentage(1.7),
    marginTop: 15,
    height: 30,
    textAlignVertical: 'bottom',
  },
  registerButton: {
    textAlignVertical: 'bottom',
    alignContent: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: -3,
  },
  registerButtonText: {
    textDecorationLine: 'underline',
    fontFamily: theme.fonts.light,
    color: theme.colors.gray_300,
    fontSize: RFPercentage(1.7),
  },
});
