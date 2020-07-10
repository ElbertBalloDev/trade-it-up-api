import React, { createContext, useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

interface IUser {
  token: string;
  email: string;
}

export interface INewUser {
  email: string;
  password: string;
  confirmPassword: string;
  confirmationCode: string;
}

interface IAppContext {
  user: Object | null;
  newUser: INewUser;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (newUser: INewUser) => Promise<void>;
}

export const AppContext = createContext<IAppContext>({
  user: {},
  newUser: {
    email: '',
    password: '',
    confirmPassword: '',
    confirmationCode: ''
  },
  login: async () => undefined,
  logout: () => undefined,
  register: async () => undefined
});

export default ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [newUser, setNewUser] = useState<INewUser>({
    email: '',
    password: '',
    confirmPassword: '',
    confirmationCode: ''
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const session = await Auth.currentSession();
        const token = session.getIdToken();
        setUser({ token: token.getJwtToken(), email: token.payload.email });
      } catch (err) {
        setUser(null);
      }
    };
    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    const auth = await Auth.signIn(email, password);
    const token = auth.signInUserSession.getIdToken();
    setUser({ token: token.getJwtToken(), email: token.payload.email });
  };

  const register = async (newUser: INewUser): Promise<void> => {
    await Auth.signUp(newUser.email, newUser.password);
    setNewUser(newUser);
  };

  const logout = () => {
    Auth.signOut();
    setUser(null);
  };

  const context: IAppContext = {
    user,
    login,
    logout,
    register,
    newUser
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
