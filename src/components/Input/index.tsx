import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {theme} from '../../theme/theme';

type Props = {
  title: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  isSecureText?: boolean;
};

export function Input({
  title,
  onChangeText,
  isSecureText = false,
  placeholder,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholderTextColor={theme.colors.black_100}
        secureTextEntry={isSecureText}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
}
