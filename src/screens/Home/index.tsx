import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import {Header} from '../../components/Header';
import {Portfolio} from '../../components/Portfolio';
import {CarbonCreditsButton} from '../../components/CarbonCreditsButton';

import {styles} from './styles';
import {Fund} from '../../components/Fund';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: '100%'}}
        contentContainerStyle={{alignItems: 'center', paddingBottom: 20}}>
        <Portfolio />
        <View style={styles.funds}>
          <Text style={styles.title}>Funds</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 10,
            }}>
            <Fund title="Wind" growth={10.5} value={1032.23} />
            <Fund title="Solar" growth={-10.5} value={1032.23} />
            <Fund title="Nature" growth={10.5} value={1032.23} />
          </ScrollView>
        </View>
        <CarbonCreditsButton />

        <View style={styles.bottomCards}>
          <View style={styles.bottomCard}>
            <Text style={styles.bottomCardTitle}>
              Why should you{'\n'} invest here?
            </Text>
          </View>
          <View style={styles.bottomCard} />
        </View>
      </ScrollView>
    </View>
  );
}
