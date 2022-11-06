import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Link as ReactLink } from 'react-router-dom';

export default function Button({
  children, className, color, disabled, fullWidth, onClick, plain, size, to,
}: ButtonProps): ReactElement {
  const componentClass = clsx(
    className,
    [
      'block',
      'rounded-lg',
      'border',
      'h-fit',
      'text-center',
    ],
    {
      'p-1 px-2': size === 'small',
      'p-2': size === 'medium' || !size,
      'p-3': size === 'large',

      'border-primary': color === 'primary' || !color,
      'border-secondary': color === 'secondary',
      'border-basic': color === 'basic',

      'bg-primary text-basic hover:text-primary': (color === 'primary' || !color) && plain,
      'bg-secondary text-basic hover:text-secondary': color === 'secondary' && plain,
      'bg-basic text-primary hover:text-basic': color === 'basic' && plain,

      'text-primary hover:bg-primary hover:text-basic': (color === 'primary' || !color) && !plain,
      'text-secondary hover:bg-secondary hover:text-basic': color === 'secondary' && !plain,
      'text-basic hover:bg-basic hover:text-primary': color === 'basic' && !plain,

      'hover:bg-transparent': plain,

      'w-full': fullWidth,
      'w-fit': !fullWidth,
    },
  );

  if (to) {
    return (
      <ReactLink
        className={componentClass}
        to={to}
      >
        {children}
      </ReactLink>
    );
  }

  return (
    <button
      className={componentClass}
      type={onClick ? 'button' : 'submit'}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
