import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {TradeHeader} from '../../components/TradeHeader';
import {MyPortfolio} from '../../components/MyPortfolio';

import {styles} from './styles';
import {theme} from '../../theme/theme';

export function Trade() {
  let selected = false;
  const textStyle = selected
    ? {color: theme.colors.black_100}
    : {color: theme.colors.gray_300};

  const borderStyle = selected
    ? {borderBottomWidth: 2}
    : {borderBottomWidth: 0};
  return (
    <View style={styles.container}>
      <TradeHeader title="Wind" slug="SWLO" />
      <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
        <View style={styles.fundBreakdownContainer}>
          <Text style={styles.title}>Fund Breakdown</Text>

          <View style={styles.tabBar}>
            <TouchableOpacity style={[styles.button, borderStyle]}>
              <Text style={[styles.buttonTitle, textStyle]}>Highlighted</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, borderStyle]}>
              <Text style={[styles.buttonTitle, textStyle]} t>
                Value
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, borderStyle]}>
              <Text style={[styles.buttonTitle, textStyle]}>Vintage</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, borderStyle]}>
              <Text style={[styles.buttonTitle, textStyle]}>Registry</Text>
            </TouchableOpacity>
          </View>

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
