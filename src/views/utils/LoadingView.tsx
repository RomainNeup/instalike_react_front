import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import H1 from '../../components/base/Titles/H1';
import Icon from '../../components/base/Icons/Icon';
import Body from '../../components/layout/Body';

export default function LoadingView(): ReactElement {
  const { t } = useTranslation('common');

  return (
    <Body size="medium">
      <H1 className="mb-16 text-left">{t('loading')}</H1>
      <Icon name="autorenew" className="animate-spin text-6xl w-fit self-center p-16" color="primary" />
    </Body>
  );
}
