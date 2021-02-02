import React, { createContext, useState } from 'react';
import api from '../services/api';

export const UserContext = createContext();

export default function UserStore({ children }) {
  const [data, setData] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function userLogin(username, password) {
    try {
      const { data } = await api.post('/jwt-auth/v1/token', {
        username,
        password,
      });

      const { token } = data;
      sessionStorage.setItem('token', token);
      await getUser();
    } catch (error) {
      setError(error);
    }
  }

  async function getUser() {
    const { data } = await api.get('/api/user');
    setData(data);
    setIsLoading(true);
  }

  return (
    <UserContext.Provider value={{ userLogin }}>
      {children}
    </UserContext.Provider>
  );
}
