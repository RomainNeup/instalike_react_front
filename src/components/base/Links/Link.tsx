import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import clsx from 'clsx';

export function Link({children, to, className}: LinkProps): JSX.Element {
  const componentClass = clsx(
    className,
    [
      'w-full',
      'block',
      'rounded-md',
      'bg-transparent',
      'text-primary',
      'hover:text-primary/75',
      'text-start',
      'underline',
    ],
  );
  return (
    <div>
      <ReactLink
        className={componentClass}
        to={to}
      >
        {children}
      </ReactLink>
    </div>
  );
}
