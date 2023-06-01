import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

import BackIcon from '../../assets/icons/arrowLeft.svg';
import {styles} from './styles';
import {TermsOfServiceCheckbox} from '../../components/TermsOfServiceCheckbox';

type userData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export function SignUp() {
  const [checked, setChecked] = useState(false);
  const [userData, setUserData] = useState<userData>({} as userData);

  async function handleRegisterUser() {}

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 100}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
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
        <Button title="Create account" onPress={() => console.log()} />

        <Text style={styles.registerText}>
          Already have an account?
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}> Log in Here </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  );
}
