import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useFom from '../../../custom-hooks/useFom';
import Button from '../../Form/Button';
import Input from '../../Form/Input';
import { UserContext } from '../../../stores/UserStore';

import './login-form.scss';

export default function LoginForm() {
  const username = useFom();
  const password = useFom();

  const { userLogin } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    await userLogin(username.value, password.value);
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
