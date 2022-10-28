import React from 'react';
import clsx from 'clsx';

export function Input({
  className, disabled, label, noBorder, onChange, placeholder, type, value,
}: InputProps): JSX.Element {
  const componentClass = clsx(
    className,
    ['text-primary'],
  );
  const inputClass = clsx(
    [
      'w-full',
      'block',
      'rounded-md',
      'bg-transparent',
      'placeholder:text-primary/50',
      'px-2',
    ],
    {
      'border border-primary p-2': !noBorder,
      'mt-2': !!label,
    },
  );

  return (
    <div className={componentClass}>
      <label hidden={!label}>{label}</label>
      <input
        className={inputClass}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
