import React, { ReactElement } from 'react';
import H1 from '../../components/base/Titles/H1';
import Icon from '../../components/base/Icons/Icon';
import Body from '../../components/layout/Body';

export default function LoadingView(): ReactElement {
  return (
    <Body size="medium">
      <H1 className="mb-16 text-left">Chargement...</H1>
      <Icon name="autorenew" className="animate-spin text-8xl" color="primary" />
    </Body>
  );
}
