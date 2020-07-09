import React, { createContext, useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

interface IAppContext {
  user: Object | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string) => Promise<void>;
}

interface IUser {
  token: string;
  email: string;
}

export const AppContext = createContext<IAppContext>({
  user: {},
  login: async () => undefined,
  logout: () => undefined,
  register: async () => undefined,
});

export default ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

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

  const register = async (email: string, password: string): Promise<void> => {
    const auth = await Auth.signUp(email, password);

  };

  const logout = () => {
    Auth.signOut();
    setUser(null);
  };

  const context: IAppContext = {
    user,
    login,
    logout, 
    register
  };
  
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
