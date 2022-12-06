import React, { ReactElement } from 'react';
import clsx from 'clsx';
import H3 from '../../base/Titles/H3';
import Input from '../../base/Inputs/Input';
import Button from '../../base/Buttons/Button';
import Checkbox from '../../base/Inputs/Checkbox';

export default function AddConversation({
  open = false, className, close,
}: AddConversationProps): ReactElement {
  const modalClass = clsx(
    className,
    [
      'fixed',
      'top-0',
      'left-0',
      'right-0',
      'z-50',
      'w-full',
      'p-16',
      'overflow-x-hidden',
      'overflow-y-auto',
      'md:inset-0',
      'md:h-full',
      'flex',
      'justify-center',
      'bg-basic/50',
      'transition-all',
    ],
    {
      hidden: !open,
    },
  );
  const contentClass = clsx(
    [
      'bg-basic',
      'rounded',
      'shadow',
      'text-primary',
      'w-2/5',
      'h-fit',
      'p-8',
      'border',
      'border-primary',
      'space-y-4',
    ],
  );

  return (
    <div tabIndex={-1} className={modalClass}>
      <div className={contentClass}>
        <H3>New conversation</H3>
        <Input className="py-4" placeholder="Search user" type="text" />
        <Checkbox label="Romain" />
        <Button plain fullWidth>Create conversation</Button>
        <Button fullWidth onClick={close}>Cancel</Button>
      </div>
    </div>
  );
}
