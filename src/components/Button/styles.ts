import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: theme.colors.purple_100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 4,
  },
  title: {
    fontFamily: theme.fonts.light,
    color: theme.colors.white_100,
    fontSize: RFPercentage(2.1),
  },
});
