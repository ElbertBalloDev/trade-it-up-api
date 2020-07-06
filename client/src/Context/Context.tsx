import React, { createContext, useState, useEffect } from 'react';

interface IAppContext {
  user: Object | null;
}

export const AppContext = createContext<IAppContext>({
  user: {}
});

export default ({ children }: { children: React.ReactNode }) => {
  // create user type
  const [user, setUser] = useState(null);

  useEffect(() => {
    // get user from cognito
  }, []);

  const context: IAppContext = {
    user
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
