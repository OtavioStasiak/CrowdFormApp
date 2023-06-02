import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ArrowUp from '../../assets/icons/arrowUp.svg';
import PorftolioIcon from '../../assets/icons/portfolio.svg';

import {styles} from './styles';
import {theme} from '../../theme/theme';

export function MyPortfolio() {
  return (
    <View style={styles.container}>
      <View style={styles.portfolio}>
        <View style={styles.portfolioHeader}>
          <PorftolioIcon style={{color: theme.colors.black_100}} />
          <Text style={styles.portfolioTitle}>Your Portfolio</Text>
        </View>

        <View style={styles.portfolioValues}>
          <View style={styles.portfolioContent}>
            <Text style={styles.values}>18 credits</Text>
            <Text style={styles.values}>$328.14</Text>
          </View>

          <View style={styles.portfolioContent}>
            <View style={styles.percentageContainer}>
              <ArrowUp />
              <Text style={styles.percentage}>8.41%</Text>
            </View>
            <Text style={styles.lastPucharse}>Last pucharse 28d ago</Text>
          </View>
        </View>

        <View style={styles.operationButtons}>
          <TouchableOpacity style={styles.sellButton}>
            <Text style={styles.sellButtonTitle}>Sell</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.retireButton}>
            <Text style={styles.retireButtonTitle}>Retire credits</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.yourPortfolioTip}>
          You’ve previously retired 28 credits of this asset
        </Text>
      </View>

      <View style={styles.warningContainer}>
        <Text style={styles.warningText}>
          {
            'Please note that prices are for reference only and may vary at the time of excecuting a buy or sell order.\n\nThe information provided is not investment advice, and should not be used as a recommendation to buy or sell assets.'
          }
        </Text>
      </View>

      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonTitle}>Buy</Text>
      </TouchableOpacity>
    </View>
  );
}
