import React from 'react';
import clsx from 'clsx';

export function Input(props: InputProps): JSX.Element {
  const componentClass = clsx(
    props.className,
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
      'border border-primary p-2': !props.noBorder,
      'mt-2': !!props.label,
    },
  );

  return (
    <div className={componentClass}>
      <label hidden={!props.label}>{props.label}</label>
      <input
        className={inputClass}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
