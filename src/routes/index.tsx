import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SignInRoutes} from './signIn.routes';
import {useAuth} from '../hooks/useAuth';
import {AuthRoutes} from './auth.routes';

export function Routes() {
  const {user} = useAuth();
  return (
    <NavigationContainer>
      {user?.token ? <AuthRoutes /> : <SignInRoutes />}
    </NavigationContainer>
  );
}
