import React from 'react';
import {View, Text} from 'react-native';

type Props = {
  title: string;
  slug: string;
};

export function TradeHeader({title, slug}: Props) {
  return (
    <View>
      <View>
        <Text>{title}</Text>
        <Text>{slug}</Text>
      </View>
    </View>
  );
}
