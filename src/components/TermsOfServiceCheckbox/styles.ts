import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  text_gray: {
    color: theme.colors.gray_300,
    fontFamily: theme.fonts.light,
    fontSize: RFPercentage(1.8),
  },
  text_button: {
    color: theme.colors.black_100,
    fontFamily: theme.fonts.light,
    fontSize: RFPercentage(1.9),
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
