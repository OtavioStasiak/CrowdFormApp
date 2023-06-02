import React from 'react';
import {
  Linking,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Logo from '../../assets/logo.png';
import {styles} from './styles';

export function Portfolio() {
  function onButtonPress() {
    Linking.openURL('https://otaviostasiakdeveloper.com');
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />

      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>
        {
          'Hello, my name is Otávio Stasiak and I am delighted to be participating in this selection process.\n To learn more about me and my career, please click the button below.'
        }
      </Text>
      <TouchableOpacity
        onPress={onButtonPress}
        activeOpacity={0.8}
        style={styles.button}>
        <Text style={styles.buttonTitle}>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
}
