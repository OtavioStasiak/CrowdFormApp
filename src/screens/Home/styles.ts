import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.white_100,
  },
  portfolio: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '10%',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray_200,
  },
  portfolioTitle: {
    fontFamily: theme.fonts.light,
  },
  portfolioContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  amount: {
    fontFamily: theme.fonts.bold,
    fontSize: RFPercentage(3),
  },
  portfolioPercentage: {
    fontFamily: theme.fonts.light,
    fontSize: RFPercentage(1.8),
    color: theme.colors.green_100,
    textAlign: 'center',
  },
  earnRewardsButton: {
    backgroundColor: theme.colors.purple_200,
    padding: 10,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  earnRewardsTitle: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.purple_100,
    marginLeft: 5,
  },
});
