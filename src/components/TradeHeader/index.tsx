import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BackIcon from '../../assets/icons/arrowLeft.svg';

import {styles} from './styles';

type Props = {
  title: string;
  slug: string;
};

export function TradeHeader({title, slug}: Props) {
  const {goBack} = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <BackIcon />
      </TouchableOpacity>
      <View
        style={{
          width: '88%',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Text style={styles.title}>{title} Fund</Text>
        <Text style={styles.text_gray}>{slug}</Text>
      </View>
    </View>
  );
}
