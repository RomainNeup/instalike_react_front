import React from 'react';
import clsx from 'clsx';

export function H2({ children, className }: TitleProps): JSX.Element {
  const componentClass = clsx(
    className,
    [
      'text-primary',
      'text-4xl',
      'font-extrabold',
      'tracking-wider',
    ],
  );
  return (
    <h2 className={componentClass}>
      {children}
    </h2>
  );
}
