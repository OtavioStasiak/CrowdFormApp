import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Profile from '../../assets/icons/profile.svg';
import CaretDown from '../../assets/icons/caretDown.svg';
import Notification from '../../assets/icons/notification.svg';
import {styles} from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Profile />
      </TouchableOpacity>

      <TouchableOpacity style={styles.account}>
        <Text style={styles.title}>Account: $1,457.23</Text>
        <CaretDown />
      </TouchableOpacity>

      <TouchableOpacity>
        <Notification />
      </TouchableOpacity>
    </View>
  );
}
