import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../stores/UserStore';

import { ReactComponent as DogsLogo } from '../../assets/dogs.svg';

import './header.scss';

export default function Header() {
  const { data, userLogout } = useContext(UserContext);

  return (
    <header id="header">
      <nav>
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <DogsLogo />
        </Link>

        {data ? (
          <div>
            <Link className="login" to="/conta">
              {data.nome}
            </Link>
            <button onClick={userLogout}>Sair</button>
          </div>
        ) : (
          <Link className="login" to="/login">
            Login / Novo
          </Link>
        )}
      </nav>
    </header>
  );
}
