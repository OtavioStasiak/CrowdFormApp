import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from '../screens/SignIn';
import {SignUp} from '../screens/SignUp';

const Stack = createNativeStackNavigator();

export function SignInRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        options={{headerShown: false}}
        component={SignIn}
      />
      <Stack.Screen
        name="SignUp"
        options={{headerShown: false}}
        component={SignUp}
      />
    </Stack.Navigator>
  );
}
