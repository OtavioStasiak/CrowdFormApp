import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  portfolio: {
    marginTop: '20%',
    width: '90%',
    marginBottom: '10%',
  },
  portfolioHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  portfolioTitle: {
    fontFamily: theme.fonts.bold,
    marginLeft: 5,
    fontSize: RFPercentage(1.9),
  },
  portfolioValues: {
    marginBottom: 20,
  },
  portfolioContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  values: {
    fontFamily: theme.fonts.bold,
    fontSize: RFPercentage(2.7),
    marginBottom: 3,
  },
  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentage: {
    color: theme.colors.green_100,
    fontFamily: theme.fonts.light,
    marginLeft: 3,
  },
  lastPucharse: {
    color: theme.colors.gray_300,
    fontFamily: theme.fonts.light,
  },
  operationButtons: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  sellButton: {
    width: 165,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.colors.gray_200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sellButtonTitle: {
    color: theme.colors.purple_100,
    fontFamily: theme.fonts.medium,
    fontSize: RFPercentage(1.8),
  },
  retireButton: {
    width: 165,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.green_100,
  },
  retireButtonTitle: {
    color: theme.colors.white_100,
    fontFamily: theme.fonts.medium,
    fontSize: RFPercentage(1.8),
  },
  yourPortfolioTip: {
    color: theme.colors.gray_300,
    fontFamily: theme.fonts.light,
    fontSize: RFPercentage(1.4),
  },
  warningContainer: {
    width: '90%',
    padding: 15,
    borderRadius: 4,
    backgroundColor: theme.colors.gray_100,
  },
  warningText: {
    fontFamily: theme.fonts.light,
    color: theme.colors.gray_300,
  },
  buyButton: {
    backgroundColor: theme.colors.purple_100,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 4,
    marginTop: '8%',
  },
  buyButtonTitle: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.white_100,
    fontSize: RFPercentage(1.9),
  },
});
