import React, { createContext, useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Alert } from '../components/Alert';

interface IUser {
  token: string;
  email: string;
}

export interface IAlert {
  type: 'success' | 'error';
  message: string;
}

export interface INewUser {
  email: string;
  password: string;
  confirmPassword: string;
  isConfirmed: boolean;
}

interface IAppContext {
  user: Object | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  addToast: (alert: IAlert) => void;
}

export const AppContext = createContext<IAppContext>({
  user: {},
  login: async () => undefined,
  logout: () => undefined,
  addToast: () => undefined
});

export default ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [alerts, setAlerts] = useState<Array<IAlert>>([]);

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

  useEffect(() => {
    setTimeout(() => setAlerts([]), 5000);
    return () => clearTimeout();
  }, [alerts]);

  const login = async (email: string, password: string): Promise<void> => {
    const auth = await Auth.signIn(email, password);
    const token = auth.signInUserSession.getIdToken();
    setUser({ token: token.getJwtToken(), email: token.payload.email });
  };

  const logout = () => {
    Auth.signOut();
    setUser(null);
  };

  const addToast = (alert: IAlert) => setAlerts([...alerts, alert]);

  const removeMessage = (index: number) => {};

  const context: IAppContext = {
    user,
    login,
    logout,
    addToast
  };

  return (
    <AppContext.Provider value={context}>
      <>
        {alerts.map((alert: IAlert, index: number) => (
          <Alert key={index} alert={alert} />
        ))}
        {children}
      </>
    </AppContext.Provider>
  );
};
