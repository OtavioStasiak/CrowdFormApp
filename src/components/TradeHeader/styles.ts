import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {theme} from '../../theme/theme';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '13%',
    marginTop: getStatusBarHeight(),
    paddingHorizontal: '5%',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray_200,
  },
  text_gray: {
    color: theme.colors.gray_400,
    fontFamily: theme.fonts.light,
    fontSize: RFPercentage(1.4),
  },
  title: {
    color: theme.colors.black_100,
    fontFamily: theme.fonts.bold,
    fontSize: RFPercentage(1.8),
  },
  close: {
    marginLeft: '90%',
    marginVertical: 10,
  },
  modal: {
    width: '95%',
    height: '90%',
    backgroundColor: theme.colors.white_100,
    padding: 10,
    borderRadius: 10,
  },
});
