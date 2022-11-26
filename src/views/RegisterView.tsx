import React, { FormEvent, ReactElement, useState } from 'react';
import Button from '../components/base/Buttons/Button';
import H1 from '../components/base/Titles/H1';
import Input from '../components/base/Inputs/Input';
import Link from '../components/base/Links/Link';
import authService from '../api/auth/service';
import { useAppDispatch } from '../store/hooks';
import { loginUser } from '../store/reducers/user/reducer';

export default function RegisterView(): ReactElement {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const handleRegister = (event: FormEvent) => {
    event.preventDefault();
    authService.register(username, email, password)
      .then(() => authService.login(username, password))
      .then((response) => dispatch(loginUser(response)));
  };

  return (
    <div className="max-w-md w-2/3">
      <H1 className="mb-16">Inscrivez vous</H1>
      <form onSubmit={handleRegister}>
        <Input
          label="Nom d'utilisateur"
          placeholder="toto"
          className="mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Adresse email"
          placeholder="example@mail.fr"
          className="mb-4"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Mot de passe"
          placeholder="****"
          className="mb-8"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link className="mb-4" to="/login">J&apos;ai déjà un compte</Link>
        <Button fullWidth>Je m&apos;inscris</Button>
      </form>
    </div>
  );
}
