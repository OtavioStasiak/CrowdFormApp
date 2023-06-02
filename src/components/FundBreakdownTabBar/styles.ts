import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
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
