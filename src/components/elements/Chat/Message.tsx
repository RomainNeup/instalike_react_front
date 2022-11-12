import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Image from '../../base/Images/Image';

export default function Message({
  text, user, className,
}: MessageProps): ReactElement {
  const containerClass = clsx(
    className,
    [
      'flex',
      'mb-4',
      'items-end',
    ],
    user.currentUser ? 'flex-row-reverse' : 'flex-row',
  );
  const messageClass = clsx(
    [
      'p-4',
      'w-fit',
      'shrink',
      'mx-2',
      'text-basic',
      'rounded-t-lg',
    ],
    user.currentUser ? 'bg-secondary rounded-l-lg' : 'bg-primary rounded-r-lg',
  );

  return (
    <div className={containerClass}>
      <div className="h-12 w-12 shrink-0">
        <Image src={user.media?.url} alt="Avatar" round />
      </div>
      <div className={messageClass}>
        {text}
      </div>
      <div className="h-12 w-12 shrink-0" />
    </div>
  );
}
