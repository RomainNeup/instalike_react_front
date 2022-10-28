import React from 'react';
import clsx from 'clsx';

export function H4({ children, className }: TitleProps): JSX.Element {
  const componentClass = clsx(
    className,
    [
      'text-primary',
      'text-2xl',
      'font-semibold',
      'tracking-normal',
    ],
  );
  return (
    <h4 className={componentClass}>
      {children}
    </h4>
  );
}
