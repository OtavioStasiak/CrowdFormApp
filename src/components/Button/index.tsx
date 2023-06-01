import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

import {theme} from '../../theme/theme';
import {styles} from './styles';

type Props = {
  title: string;
  onPress: () => void;
  loading?: boolean;
};

export function Button({title, onPress, loading = false}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      {loading ? (
        <ActivityIndicator size={15} color={theme.colors.white_100} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
