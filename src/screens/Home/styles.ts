import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.white_100,
  },
  funds: {
    marginBottom: 20,
    height: 200,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: RFPercentage(2),
    marginVertical: 15,
    marginLeft: 20,
  },
  bottomCards: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  bottomCard: {
    width: 170,
    height: 215,
    backgroundColor: theme.colors.gray_100,
    borderRadius: 10,
    padding: 15,
  },
  bottomCardTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: RFPercentage(1.5),
  },
});
