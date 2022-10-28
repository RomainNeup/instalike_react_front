import React from 'react';
import clsx from 'clsx';

export function H1({children, className}: TitleProps): JSX.Element {
  const componentClass = clsx(
    className,
    [
      'text-primary',
      'text-5xl',
      'font-black',
      'tracking-wider',
    ],
  );
  return (
    <h1 className={componentClass}>
      {children}
    </h1>
  );
}
