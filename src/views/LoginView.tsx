import React, { FormEvent, ReactElement, useState } from 'react';
import Button from '../components/base/Buttons/Button';
import H1 from '../components/base/Titles/H1';
import Input from '../components/base/Inputs/Input';
import Link from '../components/base/Links/Link';
import userService from '../api/user/service';
import { loginUser } from '../store/reducers/user/reducer';
import { useAppDispatch } from '../store/hooks';

export default function LoginView(): ReactElement {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    userService.login(identifier, password).then((response) => {
      dispatch(loginUser(response));
    });
  };

  return (
    <div className="max-w-md w-2/3">
      <H1 className="mb-16">Connectez vous</H1>
      <form onSubmit={handleLogin}>
        <Input
          label="Nom d'utilisateur"
          placeholder="toto"
          className="mb-4"
          value={identifier}
          autocomplete="username"
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <Input
          label="Mot de passe"
          placeholder="****"
          className="mb-8"
          type="password"
          value={password}
          autocomplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link className="mb-4" to="/register">Je n&apos;ai pas de compte</Link>
        <Button fullWidth>Je me connecte</Button>
      </form>
    </div>
  );
}
