import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BusinessStatistics from '../../assets/icons/businessStatistics.svg';
import {styles} from './styles';
export function CarbonCreditsButton() {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{'Learn more about\ncarbon credits'}</Text>
        <Text style={styles.subtitle}>Check out our top tips!</Text>
      </View>
      <BusinessStatistics />
    </TouchableOpacity>
  );
}
