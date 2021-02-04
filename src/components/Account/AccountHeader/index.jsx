import React, { useContext, useState } from 'react';
import AccountHeaderNav from '../AccountHeaderNav';
import { AccountHeaderContext } from '../../../stores/AccountHeaderStore';

import './account-header.scss';

export default function AccountHeader() {
  const { title } = useContext(AccountHeaderContext);

  return (
    <header id="account-header" className="anime-left">
      <h1>{title}</h1>
      <AccountHeaderNav />
    </header>
  );
}
