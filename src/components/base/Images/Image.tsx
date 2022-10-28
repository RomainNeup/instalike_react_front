import React from 'react';
import clsx from 'clsx';

export function Image(props: ImageProps): JSX.Element {
  const imageClass = clsx(
    props.className,
    [
      'object-cover',
      'w-full',
      'h-full',
    ],
    {
      'rounded-lg': !props.round,
      'rounded-full': props.round,
      border: !!props.border,
      'border-primary': props.border === 'primary',
      'border-secondary': props.border === 'secondary',
      'border-basic': props.border === 'basic',
    },
  );

  return (
    <img
      className={imageClass}
      src={props.src}
      alt={props.alt}
    />
  );
}
