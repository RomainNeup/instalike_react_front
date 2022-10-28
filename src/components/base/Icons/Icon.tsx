import React from 'react';
import clsx from 'clsx';
import './style.css';

export default function Icon({ name, className, onClick }: IconProps): JSX.Element {
  const iconClass = clsx(
    className,
    ['material-symbols-rounded'],
  );
  return (
    <span className={iconClass}>
      {name}
    </span>
  );
}
