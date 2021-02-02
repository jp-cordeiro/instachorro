import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginCreate from '../components/Login/LoginCreate';
import LoginForm from '../components/Login/LoginForm';
import LoginPasswordLost from '../components/Login/LoginPasswordLost';
import LoginPasswordReset from '../components/Login/LoginPasswordReset';

export default function LoginRoutes({ match }) {
  let { path } = match;
  return (
    <Switch>
      <Route path={`${path}/novo`} component={LoginCreate} />
      <Route path={`${path}/perdeu`} component={LoginPasswordLost} />
      <Route path={`${path}/resetar`} component={LoginPasswordReset} />
      <Route path={`${path}`} component={LoginForm} />
    </Switch>
  );
}