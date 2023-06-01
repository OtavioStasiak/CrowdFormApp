import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SignInRoutes} from './signIn.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <SignInRoutes />
    </NavigationContainer>
  );
}
