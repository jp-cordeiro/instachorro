import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as DogsLogo } from '../../assets/dogs.svg';

import './header.scss';

export default function index() {
  return (
    <header id="header">
      <nav>
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <DogsLogo />
        </Link>
        <Link className="login" to="/login">
          Login / Novo
        </Link>
      </nav>
    </header>
  );
}
