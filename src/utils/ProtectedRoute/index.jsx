import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../stores/UserStore';

export default function ProtectedRoute(props) {
  const { isLogged } = useContext(UserContext);
  if (!isLogged) {
    return <Redirect to="/login" />;
  } else if (isLogged) {
    return <Route {...props} />;
  }
  return null;
}
