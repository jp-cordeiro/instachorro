import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './login-form.scss'

export default function LoginForm({ match }) {
  return (
    <div>
      <NavLink to={`/login/novo`}>Cadastrar</NavLink>
    </div>
  );
}
