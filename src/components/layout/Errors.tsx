import React, { ReactElement, useEffect } from 'react';
import clsx from 'clsx';
import useErrors from '../../hooks/Errors';
import Error from '../base/Errors/Error';

export default function Errors({ className }: BasicProps): ReactElement {
  const { errors } = useErrors();
  const containerClass = clsx(
    className,
    [
      'space-y-4',
      'mb-8',
    ],
    {
      hidden: errors.length === 0,
    },
  );

  useEffect(() => {
    console.log('les erreur ?', errors);
  }, [errors]);

  return (
    <div className={containerClass}>
      {errors.map((error) => <Error key={error.code} code={error.code} />)}
    </div>
  );
}
