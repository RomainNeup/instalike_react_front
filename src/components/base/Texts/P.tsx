import React from 'react';
import clsx from 'clsx';

export function P({ children, className }: PProps): JSX.Element {
  const componentClass = clsx(
    className,
    [
      'text-primary',
      'text-base',
      'font-normal',
      'tracking-normal',
      'leading-relaxed',
    ],
  );
  return (
    <p className={componentClass}>
      {children}
    </p>
  );
}
