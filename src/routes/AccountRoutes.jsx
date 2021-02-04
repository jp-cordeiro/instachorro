import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AccountHeaderStore from '../stores/AccountHeaderStore';

import AccountHeader from '../components/Account/AccountHeader';
import PhotoPost from '../pages/Account/PhotoPost';
import Statistics from '../pages/Account/Statistics';
import Feed from '../pages/Account/Feed';

import './styles/account-routes.scss';

export default function AccountRoutes({ match }) {
  let { path } = match;

  return (
    <div id="account-pages">
      <AccountHeaderStore>
        <AccountHeader />
      </AccountHeaderStore>
      <Switch>
        <Route path={`${path}/postar`} component={PhotoPost} />
        <Route path={`${path}/estatisticas`} component={Statistics} />
        <Route path={`${path}`} component={Feed} />
      </Switch>
    </div>
  );
}
