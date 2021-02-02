import React from 'react';
import { Link } from 'react-router-dom';
import useFom from '../../../custom-hooks/useFom';
import api from '../../../services/api';
import Button from '../../Form/Button';
import Input from '../../Form/Input';

import './login-form.scss';

export default function LoginForm() {
  const username = useFom();
  console.log(username.value);
  const password = useFom();
  console.log(password.value);

  async function handleSubmit(event) {
    event.preventDefault();

    const { data } = await api.post('/jwt-auth/v1/token', {
      username: username.value,
      password: password.value,
    });
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          type="text"
          label="Usuário"
          required
          {...username}
        />
        <Input
          name="password"
          type="password"
          label="Senha"
          required
          {...password}
        />
        <Button>Entrar</Button>
      </form>
      <Link to={`/login/novo`}>Cadastrar</Link>
    </section>
  );
}
