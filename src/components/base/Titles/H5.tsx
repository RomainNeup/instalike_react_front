import React from 'react';
import clsx from 'clsx';

export function H5({children, className}: TitleProps): JSX.Element {
  const componentClass = clsx(
    className,
    [
      'text-primary',
      'text-xl',
      'font-medium',
      'tracking-tight',
    ],
  );
  return (
    <h5 className={componentClass}>
      {children}
    </h5>
  );
}
