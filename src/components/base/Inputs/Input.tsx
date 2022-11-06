import React, { ReactElement } from 'react';
import clsx from 'clsx';

export default function Input({
  className, disabled, label, noBorder, onChange, placeholder, type = 'text', value,
}: InputProps): ReactElement {
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
    ],
    {
      'border border-primary': !noBorder,
      'p-2': !noBorder && type !== 'file',
      'mt-2': !!label,
    },
    type === 'file' ? [
      'file:bg-primary',
      'file:p-2',
      'file:mr-2',
      'file:cursor-pointer',
      'hover:file:bg-transparent',
      'hover:file:text-primary',
      'file:border-primary',
      'file:border-0',
      'file:border-r',
      'file:border-solid',
    ] : 'px-2',
  );

  return (
    <div className={componentClass}>
      <label hidden={!label} htmlFor={label}>{label}</label>
      {
        type === 'textarea' ? (
          <textarea
            id={label}
            className={inputClass}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            rows={4}
          />
        ) : (
          <input
            id={label}
            className={inputClass}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
        )
      }
    </div>
  );
}
