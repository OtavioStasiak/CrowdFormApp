import {Text, TouchableOpacity, View} from 'react-native';
import ArrowUp from '../../assets/icons/arrowUp.svg';
import Coin from '../../assets/icons/coin.svg';
import {styles} from './styles';

export function Portfolio() {
  return (
    <View style={styles.portfolio}>
      <Text style={styles.portfolioTitle}>Porfolio</Text>
      <View style={styles.portfolioContent}>
        <Text style={styles.amount}>$1,245.23</Text>
        <View style={styles.portfolioPercentageContainer}>
          <ArrowUp />
          <Text style={styles.portfolioPercentage}>31.82%</Text>
        </View>

        <TouchableOpacity style={styles.earnRewardsButton}>
          <Coin />
          <Text style={styles.earnRewardsTitle}>Earn Rewards</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
