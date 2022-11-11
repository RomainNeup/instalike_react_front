import React, { ReactElement } from 'react';
import H1 from '../../components/base/Titles/H1';
import Icon from '../../components/base/Icons/Icon';

export default function LoadingView(): ReactElement {
  return (
    <div className="w-full max-w-lg text-center">
      <H1 className="mb-16 text-left">Chargement...</H1>
      <Icon name="autorenew" className="animate-spin text-8xl" color="primary" />
    </div>
  );
}
