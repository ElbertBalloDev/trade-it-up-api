import React, { createContext, useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

interface IAppContext {
  user: Object | null;
  logout: () => void;
}

interface IUser {
  token: string;
  email: string;
}

export const AppContext = createContext<IAppContext>({
  user: {},
  logout: () => undefined
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

  const logout = () => {
    Auth.signOut();
    setUser(null);
  };

  const context: IAppContext = {
    user,
    logout
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
