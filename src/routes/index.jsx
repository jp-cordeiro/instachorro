import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import LoginRoutes from './LoginRoutes';

export default function index() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginRoutes} />
    </Switch>
  );
}
