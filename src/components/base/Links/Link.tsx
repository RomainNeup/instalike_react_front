import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import clsx from 'clsx';

export function Link(props: LinkProps): JSX.Element {
  const componentClass = clsx(
    props.className,
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
        to={props.to}
      >
        {props.children}
      </ReactLink>
    </div>
  );
}
