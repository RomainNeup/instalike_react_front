import React from 'react';
import clsx from 'clsx';

export function Image({
  className, round, border, alt, src,
}: ImageProps): JSX.Element {
  const imageClass = clsx(
    className,
    [
      'object-cover',
      'w-full',
      'h-full',
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
      src={src}
      alt={alt}
    />
  );
}
