import React from 'react';
import {AuthProvider} from './src/hooks/useAuth';
import Toast from 'react-native-toast-message';
import {Home} from './src/screens/Home';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <Home />
      <Toast />
    </AuthProvider>
  );
}

export default App;
