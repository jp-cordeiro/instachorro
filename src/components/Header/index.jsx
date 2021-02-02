import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../stores/UserStore';

import { ReactComponent as DogsLogo } from '../../assets/dogs.svg';

import './header.scss';

export default function Header() {
  const { data } = useContext(UserContext);

  return (
    <header id="header">
      <nav>
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <DogsLogo />
        </Link>

        {data ? (
          <Link className="login" to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className="login" to="/login">
            Login / Novo
          </Link>
        )}
      </nav>
    </header>
  );
}
