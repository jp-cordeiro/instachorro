import React, { useCallback, useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../../stores/UserStore';
import { AccountHeaderContext } from '../../../stores/AccountHeaderStore';

import { ReactComponent as FeedIcon } from '../../../assets/feed.svg';
import { ReactComponent as StatisticsIcon } from '../../../assets/adicionar.svg';
import { ReactComponent as AddIcon } from '../../../assets/estatisticas.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/sair.svg';

import './account-header-nav.scss';
import useMedia from '../../../custom-hooks/useMedia';

export default function AccountHeaderNav() {
  const { userLogout } = useContext(UserContext);
  const { setTitle } = useContext(AccountHeaderContext);

  const mobile = useMedia('(max-width: 40rem)');

  const location = useLocation();

  const [mobileMenu, setMobileMenu] = useState(false);

  const handleSetTitle = useCallback(
    (title) => {
      setTitle(title);
    },
    [setTitle]
  );

  useEffect(() => {
    setMobileMenu(false);
  }, [location.pathname]);

  return (
    <>
      {mobile && (
        <button
          id="mobile-button"
          aria-label="Menu"
          className={mobileMenu ? 'mobile-button-active' : ''}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        id="account-header-nav"
        className={`${mobile ? 'nav-mobile' : 'nav'} ${
          mobileMenu ? 'nav-mobile-active' : ''
        }`}
      >
        <NavLink
          onClick={() => handleSetTitle('Minhas Fotos')}
          exact
          to="/conta"
        >
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
    </>
  );
}
