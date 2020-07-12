import React, { createContext, useState } from 'react';

interface IAlert {
  type: 'success' | 'error';
  message: string;
}

interface IToasterContext {
  addAlert: (alert: IAlert) => void;
}

export const ToasterContext = createContext<IToasterContext>({
  addAlert: () => undefined
});

export default ({ children }: { children: React.ReactNode }) => {
  const [alerts, setAlerts] = useState<Array<IAlert>>([]);
  const addAlert = (alert: IAlert) => setAlerts([...alerts, alert]);

  const context: IToasterContext = {
    addAlert
  };

  return (
    <ToasterContext.Provider value={context}>
      {children}
    </ToasterContext.Provider>
  );
};
