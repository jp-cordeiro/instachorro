import React, { useCallback, useContext } from 'react';
import Button from '../../../components/Form/Button';
import Input from '../../../components/Form/Input';
import { UserContext } from '../../../stores/UserStore';

import './login-create.scss';
import AppError from '../../../utils/AppError';
import useFom from '../../../custom-hooks/useFom';
import { useHistory } from 'react-router-dom';

export default function LoginCreate() {
  const { createUser, userLogin, isLoading, error } = useContext(UserContext);
  const history = useHistory();

  const username = useFom();
  const email = useFom();
  const password = useFom();

  const cleanForm = useCallback(() => {
    const valueReset = {
      target: {
        value: '',
      },
    };
    username.onChange(valueReset);
    email.onChange(valueReset);
    password.onChange(valueReset);
  }, [username, email, password]);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await createUser(username.value, email.value, password.value);
        await userLogin(username.value, password.value);
        history.push('/conta');
      } catch (error) {
      } finally {
        cleanForm();
      }
    },
    [createUser, userLogin, cleanForm, history, username, email, password]
  );

  return (
    <section id="login-create">
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          type="text"
          label="Usuário"
          required
          {...username}
        />
        <Input name="email" type="email" label="E-mail" required {...email} />
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
          <Button>Cadastrar</Button>
        )}
        {error && <AppError error={error} />}
      </form>
    </section>
  );
}
