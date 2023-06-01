import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {theme} from '../../theme/theme';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    width: '100%',
    height: '10%',
    paddingTop: getStatusBarHeight() + 30,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: RFPercentage(1.9),
    marginRight: 5,
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
