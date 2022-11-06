import React, { ReactElement } from 'react';
import clsx from 'clsx';

export default function P({ children, className }: PProps): ReactElement {
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
