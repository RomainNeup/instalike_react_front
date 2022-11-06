import React from 'react';
import clsx from 'clsx';
import placeholder from '../../../assets/images/user_placeholder.png';

export default function Image({
  className, round, border, alt, src,
}: ImageProps): JSX.Element {
  const imageClass = clsx(
    className,
    [
      'object-cover',
      'w-full',
      'h-full',
      'bg-primary',
    ],
    {
      'rounded-lg': !round,
      'rounded-full': round,
      border: !!border,
      'border-primary': border === 'primary',
      'border-secondary': border === 'secondary',
      'border-basic': border === 'basic',
    },
  );

  return (
    <img
      className={imageClass}
      src={src || placeholder}
      alt={alt}
    />
  );
}
