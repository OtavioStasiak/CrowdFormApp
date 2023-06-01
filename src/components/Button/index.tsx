import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

import {theme} from '../../theme/theme';
import {styles} from './styles';

type Props = {
  title: string;
  onPress: () => void;
  loading?: boolean;
};

export function Button({title, onPress, loading = true}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      {loading ? (
        <Text style={styles.title}>{title}</Text>
      ) : (
        <ActivityIndicator size={15} color={theme.colors.white_100} />
      )}
    </TouchableOpacity>
  );
}
