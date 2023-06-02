import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {TradeHeader} from '../../components/TradeHeader';
import {MyPortfolio} from '../../components/MyPortfolio';

import {styles} from './styles';
import {FundBreakdownTabBar} from '../../components/FundBreakdownTabBar';

export function Trade() {
  const [seleted, setSelected] = useState('Highlighted');
  return (
    <View style={styles.container}>
      <TradeHeader title="Wind" slug="SWLO" />
      <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
        <View style={styles.fundBreakdownContainer}>
          <Text style={styles.title}>Fund Breakdown</Text>

          <FundBreakdownTabBar
            selected={seleted}
            onPress={select => setSelected(select)}
          />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{height: 100}}
          />
        </View>
        <MyPortfolio />
      </ScrollView>
    </View>
  );
}
