import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white_100,
    alignItems: 'center',
  },
  fundBreakdownContainer: {
    width: '100%',
    marginTop: '10%',
    paddingHorizontal: '5%',
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: RFPercentage(1.9),
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '85%',
  },
  button: {
    paddingBottom: 3,
    borderBottomColor: theme.colors.purple_100,
  },
  buttonTitle: {
    fontFamily: theme.fonts.bold,
  },
});
