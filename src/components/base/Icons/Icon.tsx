import React from 'react';
import clsx from 'clsx';
import './style.css';

export default function Icon({
  name, className, onClick, plain,
}: IconProps): JSX.Element {
  const iconClass = clsx(
    className,
    plain ? 'material-symbols-outlined' : 'material-symbols-rounded',
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
