import React from 'react';
import clsx from 'clsx';

export function H3(props: TitleProps): JSX.Element {
  const componentClass = clsx(
    props.className,
    [
      'text-primary',
      'text-3xl',
      'font-bold',
      'tracking-wide',
    ],
  );
  return (
    <h3 className={componentClass}>
      {props.children}
    </h3>
  );
}
