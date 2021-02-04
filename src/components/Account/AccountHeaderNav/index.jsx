import React, { useCallback, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../stores/UserStore';
import { AccountHeaderContext } from '../../../stores/AccountHeaderStore';

import { ReactComponent as FeedIcon } from '../../../assets/feed.svg';
import { ReactComponent as StatisticsIcon } from '../../../assets/adicionar.svg';
import { ReactComponent as AddIcon } from '../../../assets/estatisticas.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/sair.svg';

import './account-header-nav.scss';

export default function AccountHeaderNav() {
  const { userLogout } = useContext(UserContext);
  const { setTitle } = useContext(AccountHeaderContext);

  const [mobile, setMobile] = useState(null);

  const handleSetTitle = useCallback((title) => {
    setTitle(title);
  }, []);

  return (
    <nav id="account-header-nav">
      <NavLink onClick={() => handleSetTitle('Minhas Fotos')} exact to="/conta">
        <FeedIcon />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink
        onClick={() => handleSetTitle('Estatísticas')}
        to="/conta/estatisticas"
      >
        <StatisticsIcon />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink
        onClick={() => handleSetTitle('Adicionar Fotos')}
        to="/conta/postar"
      >
        <AddIcon />
        {mobile && 'Adicionar Fotos'}
      </NavLink>
      <button onClick={userLogout}>
        <LogoutIcon />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
}
