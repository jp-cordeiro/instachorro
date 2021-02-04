import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginCreate from '../pages/Login/LoginCreate';
import LoginForm from '../pages/Login/LoginForm';
import LoginPasswordLost from '../pages/Login/LoginPasswordLost';
import LoginPasswordReset from '../pages/Login/LoginPasswordReset';

import { UserContext } from '../stores/UserStore';

import './styles/login-routes.scss';

export default function LoginRoutes({ match }) {
  let { path } = match;

  const { isLogged } = useContext(UserContext);

  if (isLogged && path === '/login') {
    return <Redirect to="/conta" />;
  }

  return (
    <div id="login-forms">
      <Switch>
        <Route path={`${path}/novo`} component={LoginCreate} />
        <Route path={`${path}/perdeu`} component={LoginPasswordLost} />
        <Route path={`${path}/resetar`} component={LoginPasswordReset} />
        <Route path={`${path}`} component={LoginForm} />
      </Switch>
    </div>
  );
}
