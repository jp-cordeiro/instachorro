import React, { createContext, useCallback, useEffect, useState } from 'react';
import api from '../services/api';

export const UserContext = createContext();

export default function UserStore({ children }) {
  const [data, setData] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const userSession = sessionStorage.getItem('user');

  const getUser = useCallback(
    async function () {
      if (userSession) {
        setData(JSON.parse(userSession));
      } else {
        const { data } = await api.get('/api/user');
        setData(data);
        sessionStorage.setItem('user', JSON.stringify(data));
      }
      setIsLoading(true);
    },
    [userSession]
  );

  const userLogout = useCallback(async function () {
    setData(null);
    setError(null);
    setIsLoading(false);
    setIsLogged(false);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }, []);

  const userLogin = useCallback(
    async function (username, password) {
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
        const { data: errorData } = error.response;
        setError(errorData);
        throw new Error(errorData);
      } finally {
        setIsLoading(false);
      }
    },
    [getUser]
  );

  useEffect(() => {
    async function autoLogin() {
      try {
        setError(null);
        setIsLoading(true);
        const token = sessionStorage.getItem('token');
        if (token) {
          await api.post('/jwt-auth/v1/token/validate');
          await getUser();
          setIsLogged(true);
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
  }, [getUser, userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, isLoading, isLogged, error }}
    >
      {children}
    </UserContext.Provider>
  );
}
