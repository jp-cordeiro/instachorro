import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginCreate from '../components/Login/LoginCreate';
import LoginForm from '../components/Login/LoginForm';
import LoginPasswordLost from '../components/Login/LoginPasswordLost';
import LoginPasswordReset from '../components/Login/LoginPasswordReset';

import { UserContext } from '../stores/UserStore';

import './styles/login-routes.scss';

export default function LoginRoutes({ match }) {
  let { path } = match;

  const { isLogged } = useContext(UserContext);

  if (isLogged) {
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
