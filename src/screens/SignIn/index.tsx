import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export function SignIn() {
  const {navigate} = useNavigation();

  async function handleNavigateToSignUp() {
    navigate('SignUp' as never);
  }
  return (
    <View style={styles.container}>
      <ScrollView
        style={{width: '100%', paddingVertical: 10}}
        contentContainerStyle={{flex: 1, width: '100%', alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
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
          <TouchableOpacity
            onPress={handleNavigateToSignUp}
            style={styles.registerButton}>
            <Text style={styles.registerButtonText}> Sign up </Text>
          </TouchableOpacity>
          here
        </Text>
      </ScrollView>
    </View>
  );
}
