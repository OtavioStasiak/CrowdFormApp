import React from 'react';
import {AuthProvider} from './src/hooks/useAuth';
import Toast from 'react-native-toast-message';
import {Routes} from './src/routes';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <Routes />
      <Toast />
    </AuthProvider>
  );
}

export default App;
