import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Icon from '../Icons/Icon';
import P from '../Texts/P';
import useErrors from '../../../store/reducers/error/hooks';

export default function Error({ code }: ErrorType): ReactElement {
  const { removeError } = useErrors();

  const errorClass = clsx(
    [
      'flex',
      'justify-between',
      'bg-red',
      'text-primary',
      'px-8',
      'py-4',
      'rounded-lg',
    ],
  );

  return (
    <div className={errorClass}>
      <P color="primary">
        <Icon name="error" className="mr-2" />
        {code}
      </P>
      <Icon onClick={() => removeError(code)} name="close" />
    </div>
  );
}
