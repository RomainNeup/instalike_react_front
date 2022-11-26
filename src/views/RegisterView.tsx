import React, { FormEvent, ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/base/Buttons/Button';
import H1 from '../components/base/Titles/H1';
import Input from '../components/base/Inputs/Input';
import Link from '../components/base/Links/Link';
import AuthService from '../api/auth/service';
import { useAppDispatch } from '../store/hooks';
import { loginUser } from '../store/reducers/user/reducer';

export default function RegisterView(): ReactElement {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const { t } = useTranslation('auth');

  const handleRegister = (event: FormEvent) => {
    event.preventDefault();
    AuthService.register(username, email, password)
      .then(() => AuthService.login(username, password))
      .then((response) => dispatch(loginUser(response)));
  };

  return (
    <div className="max-w-md w-2/3">
      <H1 className="mb-16">{t('register.title')}</H1>
      <form onSubmit={handleRegister}>
        <Input
          label={t('fields.username')}
          placeholder={t('placeholders.username')}
          className="mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label={t('fields.email')}
          placeholder={t('placeholders.email')}
          className="mb-4"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label={t('fields.password')}
          placeholder={t('placeholders.password')}
          className="mb-8"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link className="mb-4" to="/login">{t('login.link')}</Link>
        <Button fullWidth>{t('register.submit')}</Button>
      </form>
    </div>
  );
}
