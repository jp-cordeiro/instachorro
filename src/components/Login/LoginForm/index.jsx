import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import Button from '../../Form/Button';
import Input from '../../Form/Input';

import './login-form.scss';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const { data } = await api.post('/jwt-auth/v1/token', {
      username,
      password,
    });

    console.log(data);
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          type="text"
          value={username}
          handleChange={({ target }) => setUsername(target.value)}
          label="Usuário"
          required
        />
        <Input
          name="password"
          type="password"
          value={password}
          handleChange={({ target }) => setPassword(target.value)}
          label="Senha"
          required
        />
        <Button>Entrar</Button>
      </form>
      <Link to={`/login/novo`}>Cadastrar</Link>
    </section>
  );
}
