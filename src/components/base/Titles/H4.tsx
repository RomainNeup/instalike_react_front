import React from 'react';
import clsx from 'clsx';

export function H4(props: TitleProps): JSX.Element {
  const componentClass = clsx(
    props.className,
    [
      'text-primary',
      'text-2xl',
      'font-semibold',
      'tracking-normal',
    ],
  );
  return (
    <h4 className={componentClass}>
      {props.children}
    </h4>
  );
}
