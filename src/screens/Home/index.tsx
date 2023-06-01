import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import {Header} from '../../components/Header';
import {Portfolio} from '../../components/Portfolio';

import {styles} from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Portfolio />

      <View>
        <Text>Funds</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} />
      </View>
    </View>
  );
}
