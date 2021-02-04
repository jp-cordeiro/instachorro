import React, { useCallback, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useFom from '../../../custom-hooks/useFom';
import Button from '../../../components/Form/Button';
import Input from '../../../components/Form/Input';
import { UserContext } from '../../../stores/UserStore';

import './login-form.scss';
import AppError from '../../../utils/AppError';

export default function LoginForm() {
  const { userLogin, isLoading, error } = useContext(UserContext);
  const history = useHistory();

  const username = useFom();
  const password = useFom();

  const cleanForm = useCallback(() => {
    const valueReset = {
      target: {
        value: '',
      },
    };
    username.onChange(valueReset);
    password.onChange(valueReset);
  }, [username, password]);

  const handleSubmit = useCallback(
    async function (event) {
      event.preventDefault();
      try {
        await userLogin(username.value, password.value);
        history.push('/conta');
      } catch (error) {
        cleanForm();
      }
    },
    [history, cleanForm, username, password, userLogin]
  );

  return (
    <section id="login-form" className="anime-left">
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
        {isLoading ? (
          <Button disabled>Carregando ...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        {error && <AppError error={error} />}
      </form>
      <Link className="login-loss" to={`/login/perdeu`}>
        Perdeu a senha?
      </Link>
      <div className="login-new">
        <h2>Cadastre-me</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link to={`/login/novo`}>Cadastrar</Link>
      </div>
    </section>
  );
}
