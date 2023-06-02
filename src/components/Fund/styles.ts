import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.gray_250,
    borderRadius: 4,
    height: 145,
    width: 140,
    padding: 10,
    marginHorizontal: 10,
  },
  title: {
    fontFamily: theme.fonts.bold,
    marginTop: 10,
  },
  values: {
    flexDirection: 'row',
  },
  value: {
    fontFamily: theme.fonts.light,
    fontSize: RFPercentage(1.7),
    marginRight: 5,
  },
  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentage: {
    fontFamily: theme.fonts.light,
    fontSize: RFPercentage(1.5),
    color: theme.colors.green_100,
  },
});
