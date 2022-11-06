import React, { ReactElement } from 'react';
import Button from '../../components/base/Buttons/Button';
import P from '../../components/base/Texts/P';
import H1 from '../../components/base/Titles/H1';

interface NotFoundProps {
  pageName: string;
}

export default function NotFoundView({
  pageName = 'recherché',
}: NotFoundProps): ReactElement {
  return (
    <div className="w-full max-w-lg content-center">
      <H1 className="mb-16">Page non trouvée</H1>
      <P className="mb-8">
        {`La page ${pageName} n'a pas été trouvée...`}
      </P>
      <Button to="/" fullWidth>Je retourne à l&apos;accueil </Button>
    </div>
  );
}
