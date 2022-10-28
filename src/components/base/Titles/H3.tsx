import React from 'react';
import clsx from 'clsx';

export function H3({ children, className }: TitleProps): JSX.Element {
  const componentClass = clsx(
    className,
    [
      'text-primary',
      'text-3xl',
      'font-bold',
      'tracking-wide',
    ],
  );
  return (
    <h3 className={componentClass}>
      {children}
    </h3>
  );
}
