import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

export default function index() {
  return (
    <div id="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login / Novo</Link>
      </nav>
    </div>
  );
}
