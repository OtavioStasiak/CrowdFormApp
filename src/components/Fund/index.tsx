import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import Wind from '../../assets/icons/wind.svg';
import Solar from '../../assets/icons/solar.svg';
import Nature from '../../assets/icons/nature.svg';
import ArrowUp from '../../assets/icons/arrowUp.svg';
import ArrowDown from '../../assets/icons/arrowDown.svg';

import {VictoryLine} from 'victory-native';

import {theme} from '../../theme/theme';
import {styles} from './styles';

type Props = {
  title: string;
  growth: number;
  value: number;
};
export function Fund({title, growth, value}: Props) {
  const isGrowth = growth > 0;
  const percentageColor = isGrowth ? {} : {color: theme.colors.red_100};

  const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 14500},
    {quarter: 4, earnings: 13000},
    {quarter: 3, earnings: 13250},
    {quarter: 5, earnings: 10000},
    {quarter: 6, earnings: 13000},
    {quarter: 7, earnings: 14500},
    {quarter: 8, earnings: 13000},
    {quarter: 9, earnings: 13250},
    {quarter: 10, earnings: 16000},
  ];

  return (
    <TouchableOpacity activeOpacity={1} style={styles.container}>
      {title.trim() === 'Wind' && <Wind />}
      {title.trim() === 'Solar' && <Solar />}
      {title.trim() === 'Nature' && <Nature />}
      <Text style={styles.title}>{title} Fund</Text>
      <VictoryLine
        events={[
          {
            target: 'parent',
            eventHandlers: {
              onPress: () => console.log('here'),
            },
          },
        ]}
        width={115}
        interpolation="natural"
        height={70}
        samples={10}
        padding={{right: 30, bottom: 30, top: 20}}
        animate
        style={{
          data: {
            stroke: isGrowth ? theme.colors.green_100 : theme.colors.red_100,
          },
        }}
        data={data}
        x="quarter"
        y="earnings"
      />
      <View style={styles.values}>
        <Text style={styles.value}>${value}</Text>
        <View style={styles.percentageContainer}>
          {isGrowth ? <ArrowUp /> : <ArrowDown />}
          <Text style={[styles.percentage, percentageColor]}>
            {' '}
            {Math.abs(growth)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
