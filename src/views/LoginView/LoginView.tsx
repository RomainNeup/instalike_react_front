import React, { useState } from 'react';
import {
  Button, H1, Input, Link,
} from '../../components';

export default function LoginView(): JSX.Element {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('login');
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
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <Input
          label="Mot de passe"
          placeholder="****"
          className="mb-8"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link className="mb-4" to="/register">Je n'ai pas de compte</Link>
        <Button fullWidth>Je me connecte</Button>
      </form>
    </div>
  );
}
