import React, {createContext, useCallback, useContext, useState} from 'react';
import {api} from '../services/api';

type AuthContextData = {
  registerUser: (
    email: string,
    firstName: string,
    lastName: string,
    password: string,
  ) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  loading: boolean;
  setLoading: (status: boolean) => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({children}: AuthProviderProps) {
  const [user, setUser] = useState<any>();
  console.log(user);
  const [loading, setLoading] = useState(false);
  const registerUser = useCallback(
    async (
      email: string,
      firstName: string,
      lastName: string,
      password: string,
    ) => {
      const response = await api.post('/user/', {
        email,
        firstName,
        lastName,
        password,
      });

      return response.data;
    },
    [],
  );

  const signIn = useCallback(async (email: string, password: string) => {
    const response = await api.post('/user/authenticate', {
      email,
      password,
    });

    console.log(response.data);

    return response.data;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        loading,
        setLoading,
        signIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {AuthProvider, useAuth};
