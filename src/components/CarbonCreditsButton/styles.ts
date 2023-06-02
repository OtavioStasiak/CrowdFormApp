import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: theme.colors.purple_100,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  content: {
    height: 95,
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: RFPercentage(1.9),
    color: theme.colors.white_100,
  },
  subtitle: {
    fontFamily: theme.fonts.light,
    fontSize: RFPercentage(1.4),
    color: theme.colors.white_100,
  },
});
