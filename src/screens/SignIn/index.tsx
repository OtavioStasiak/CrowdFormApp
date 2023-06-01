import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

import {styles} from './styles';

export function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputs}>
        <Input
          title="Email"
          placeholder="Email"
          onChangeText={text => console.log(text)}
        />

        <Input
          title="Password"
          placeholder="Password"
          onChangeText={text => console.log(text)}
          isSecureText
        />
      </View>

      <Button title="Login" onPress={() => console.log()} />

      <Text style={styles.registerText}>
        Don’t have an account?
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}> Sign up </Text>
        </TouchableOpacity>
        here
      </Text>
    </View>
  );
}
