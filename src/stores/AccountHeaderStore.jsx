import React, { createContext, useState } from 'react';

export const AccountHeaderContext = createContext();

export default function AccountHeaderStore({ children }) {
  const [title, setTitle] = useState('Minhas Fotos');

  return (
    <AccountHeaderContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      {children}
    </AccountHeaderContext.Provider>
  );
}
