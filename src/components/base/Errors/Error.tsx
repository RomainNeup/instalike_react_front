import React from 'react';
import clsx from 'clsx';
import { Icon } from '../Icons';

export function Error({ id, message, className }: ErrorProps): JSX.Element {
  const errorClass = clsx(
    className,
    [
      'bg-secondary',
      'w-full',
      'rounded-md',
      'p-4',
      'text-basic',
    ],
  );

  return (
    <div className={errorClass}>
      <Icon
        name="close"
        className="float-right cursor-pointer hover:text-basic/75"
        onClick={() => {}}
      />
      <b className="font-bold">Erreur ! </b>
      {message}
    </div>
  );
}
