import React, {createContext, useCallback, useContext, useState} from 'react';
import {api} from '../services/api';

type User = {
  email: string;
  firstName: string;
  lastName: string;
  token: string;
};

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
  user: User;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({children}: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
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
    setUser(response.data);

    return response.data;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        loading,
        setLoading,
        signIn,
        user,
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
