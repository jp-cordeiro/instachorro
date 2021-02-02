import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';

export const UserContext = createContext();

export default function UserStore({ children }) {
  const [data, setData] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const userSession = sessionStorage.getItem('user');

  useEffect(() => {
    async function autoLogin() {
      try {
        setError(null);
        setIsLoading(true);
        const token = sessionStorage.getItem('token');
        if (token) {
          await getUser();
          await api.post('/jwt-auth/v1/token/validate');
          return;
        }
        setIsLogged(false);
      } catch (error) {
        await userLogout();
      } finally {
        setIsLoading(false);
      }
    }
    autoLogin();
  }, []);

  async function userLogin(username, password) {
    try {
      setError(null);
      setIsLoading(true);
      const { data } = await api.post('/jwt-auth/v1/token', {
        username,
        password,
      });

      const { token } = data;
      sessionStorage.setItem('token', token);
      await getUser();
    } catch (error) {
      setError(error.message);
      setIsLogged(false);
    } finally {
      setIsLoading(false);
    }
  }

  async function userLogout() {
    setData(null);
    setError(null);
    setIsLoading(false);
    setIsLogged(false);
    sessionStorage.removeItem('token');
  }

  async function getUser() {
    if (userSession) {
      setData(JSON.parse(userSession));
    } else {
      const { data } = await api.get('/api/user');
      setData(data);
      sessionStorage.setItem('user', JSON.stringify(data));
    }
    setIsLoading(true);
  }

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, isLoading, isLogged, error }}
    >
      {children}
    </UserContext.Provider>
  );
}
