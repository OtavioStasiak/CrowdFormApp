import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ArrowUp from '../../assets/icons/arrowUp.svg';
import Coin from '../../assets/icons/coin.svg';
import {styles} from './styles';
import {Header} from '../../components/Header';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.portfolio}>
        <Text style={styles.portfolioTitle}>Porfolio</Text>
        <View style={styles.portfolioContent}>
          <Text style={styles.amount}>
            $1,245.23 <ArrowUp />
            <Text style={styles.portfolioPercentage}>31.82%</Text>
          </Text>
          <TouchableOpacity style={styles.earnRewardsButton}>
            <Coin />
            <Text style={styles.earnRewardsTitle}>Earn Rewards</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text>Funds</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} />
      </View>
    </View>
  );
}
