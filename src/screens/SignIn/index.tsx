import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../hooks/useAuth';
import Toast from 'react-native-toast-message';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {navigate} = useNavigation();
  const {loading, setLoading, signIn} = useAuth();

  async function handleSignIn() {
    setLoading(true);
    try {
      await signIn(email, password);
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Oops!',
        text2: 'Email or password is incorrect, try again.',
      });
    } finally {
      setLoading(false);
    }
  }

  function handleNavigateToSignUp() {
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
            onChangeText={text => setEmail(text)}
          />

          <Input
            title="Password"
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            isSecureText
          />
        </View>

        <Button title="Login" loading={loading} onPress={handleSignIn} />

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
