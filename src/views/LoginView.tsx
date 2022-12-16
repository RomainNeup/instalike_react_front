import React, { FormEvent, ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/base/Buttons/Button';
import H1 from '../components/base/Titles/H1';
import Input from '../components/base/Inputs/Input';
import Link from '../components/base/Links/Link';
import Body from '../components/layout/Body';
import useUser from '../store/reducers/user/hooks';

export default function LoginView(): ReactElement {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation('auth');
  const { login } = useUser();

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    login(identifier, password);
  };

  return (
    <Body size="small">
      <H1 className="pb-12">{t('login.title')}</H1>
      <form onSubmit={handleLogin}>
        <Input
          label={t('fields.identifier')}
          placeholder={t('placeholders.identifier')}
          className="mb-4"
          value={identifier}
          autocomplete="username"
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <Input
          label={t('fields.password')}
          placeholder={t('placeholders.password')}
          className="mb-8"
          type="password"
          value={password}
          autocomplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link className="mb-4" to="/register">{t('register.link')}</Link>
        <Button fullWidth>{t('login.submit')}</Button>
      </form>
    </Body>
  );
}
