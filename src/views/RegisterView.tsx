import React, { FormEvent, ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/base/Buttons/Button';
import H1 from '../components/base/Titles/H1';
import Input from '../components/base/Inputs/Input';
import Link from '../components/base/Links/Link';
import Body from '../components/layout/Body';
import useUser from '../store/reducers/user/hooks';

export default function RegisterView(): ReactElement {
  const { t } = useTranslation('auth');
  const { register } = useUser();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (event: FormEvent) => {
    event.preventDefault();
    register(username, email, password);
  };

  return (
    <Body size="small">
      <H1 className="pb-12">{t('register.title')}</H1>
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
    </Body>
  );
}
