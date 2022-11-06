import React from 'react';
import clsx from 'clsx';
import './style.css';

export default function Icon({
  name, className, onClick, plain, color,
}: IconProps): JSX.Element {
  const iconClass = clsx(
    className,
    plain ? 'material-symbols-outlined' : 'material-symbols-rounded',
    {
      'text-primary': color === 'primary' || !color,
      'text-secondary': color === 'secondary',
      'text-basic': color === 'basic',
    },
    color && !!onClick && `hover:text-${color}/75`,
  );
  return (
    !onClick
      ? (
        <span className={iconClass}>
          {name}
        </span>
      )
      : (
        <button className={iconClass} onClick={onClick} type="button">
          {name}
        </button>
      )
  );
}
