import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../theme/theme';
import {styles} from './styles';

type ButtonProps = {
  title: string;
  selected: string;
  onPress: (select: string) => void;
};

function ButtonTabBar({title, selected, onPress}: ButtonProps) {
  const textStyle =
    selected === title
      ? {color: theme.colors.black_100}
      : {color: theme.colors.gray_300};

  const borderStyle =
    selected === title ? {borderBottomWidth: 2} : {borderBottomWidth: 0};
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress(title)}
      style={[styles.button, borderStyle]}>
      <Text style={[styles.buttonTitle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

type Props = {
  selected: string;
  onPress: (select: string) => void;
};

export function FundBreakdownTabBar({selected, onPress}: Props) {
  return (
    <View style={styles.tabBar}>
      <ButtonTabBar
        title="Highlighted"
        selected={selected}
        onPress={select => onPress(select)}
      />
      <ButtonTabBar
        title="Value"
        selected={selected}
        onPress={select => onPress(select)}
      />
      <ButtonTabBar
        title="Vintage"
        selected={selected}
        onPress={select => onPress(select)}
      />
      <ButtonTabBar
        title="Registry"
        selected={selected}
        onPress={select => onPress(select)}
      />
    </View>
  );
}
