import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';

import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {TermsOfServiceCheckbox} from '../../components/TermsOfServiceCheckbox';

import BackIcon from '../../assets/icons/arrowLeft.svg';

import {useAuth} from '../../hooks/useAuth';

import {styles} from './styles';

type userData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export function SignUp() {
  const [checked, setChecked] = useState(false);
  const [userData, setUserData] = useState<userData>({} as userData);

  const {registerUser, loading, setLoading} = useAuth();
  const {goBack, navigate} = useNavigation();

  async function handleRegisterUser() {
    setLoading(true);
    try {
      if (!userData.firstName || userData.firstName.trim() === '') {
        Toast.show({
          type: 'error',
          text1: 'Oops!',
          text2: 'Field First Name is Empty.',
        });
        return;
      }

      if (!userData.lastName || userData.lastName.trim() === '') {
        Toast.show({
          type: 'error',
          text1: 'Oops!',
          text2: 'Field Last Name is Empty.',
        });
        return;
      }

      if (!userData.email || userData.email.trim() === '') {
        Toast.show({
          type: 'error',
          text1: 'Oops!',
          text2: 'Field Email is Empty.',
        });
        return;
      }

      if (!userData.password || userData.password.trim() === '') {
        Toast.show({
          type: 'error',
          text1: 'Oops!',
          text2: 'Field Password is Empty.',
        });
        return;
      }

      if (!checked) {
        Toast.show({
          type: 'error',
          text1: 'Oops!',
          text2: 'You need to agree with the Terms of Service.',
        });
      }

      await registerUser(
        userData.email,
        userData.firstName,
        userData.lastName,
        userData.password,
      );

      Toast.show({
        type: 'success',
        text1: 'Success!',
        text2: 'Account created! signIn to start your investments!',
      });

      navigate('SignIn' as never);
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Oops!',
        text2: 'An error occurred, try again later.',
      });
    } finally {
      setLoading(false);
    }
  }

  async function handleGoBack() {
    goBack();
  }

  async function handleNavigateToSignIn() {
    navigate('SignIn' as never);
  }

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 100}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <BackIcon />
          </TouchableOpacity>

          <View style={styles.headerDetailContainer}>
            <View style={styles.headerDetail} />
            <View style={styles.headerDetail} />
            <View style={styles.headerDetail} />
          </View>
        </View>

        <Text style={styles.title}>Create your account</Text>

        <View style={styles.inputs}>
          <Input
            title="First Name"
            placeholder="First Name"
            onChangeText={text =>
              setUserData(prevState => {
                return {
                  ...prevState,
                  firstName: text,
                };
              })
            }
          />

          <Input
            title="Last Name"
            placeholder="Last Name"
            onChangeText={text =>
              setUserData(prevState => {
                return {
                  ...prevState,
                  lastName: text,
                };
              })
            }
          />

          <Input
            title="Email"
            placeholder="Email"
            onChangeText={text =>
              setUserData(prevState => {
                return {
                  ...prevState,
                  email: text,
                };
              })
            }
          />

          <Input
            title="Password"
            placeholder="Minimum 8 characters"
            isSecureText
            onChangeText={text =>
              setUserData(prevState => {
                return {
                  ...prevState,
                  password: text,
                };
              })
            }
          />
        </View>

        <TermsOfServiceCheckbox
          checked={checked}
          onCheckPress={() => setChecked(!checked)}
        />
        <Button
          title="Create account"
          loading={loading}
          onPress={handleRegisterUser}
        />

        <Text style={styles.registerText}>
          Already have an account?
          <Text
            onPress={handleNavigateToSignIn}
            style={styles.registerButtonText}>
            {' '}
            Log in Here{' '}
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
