import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import Body from '../../components/layout/Body';
import Button from '../../components/base/Buttons/Button';
import P from '../../components/base/Texts/P';
import H1 from '../../components/base/Titles/H1';
import Icon from '../../components/base/Icons/Icon';

interface NotFoundProps {
  pageName: string;
}

export default function NotFoundView({
  pageName = '',
}: NotFoundProps): ReactElement {
  const { t } = useTranslation('common');

  return (
    <Body size="medium">
      <H1 className="mb-16">{t('notFound.title')}</H1>
      <P className="py-8">
        {t('notFound.text', { page: pageName })}
      </P>
      <Button to="/" fullWidth>
        <Icon name="home" className="mr-2" />
        {t('notFound.link')}
      </Button>
    </Body>
  );
}
