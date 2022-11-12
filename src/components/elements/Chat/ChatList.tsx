import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Image from '../../base/Images/Image';

export default function ChatList({ className }: ChatListProps): ReactElement {
  const containerClass = clsx(
    className,
    [
      'overflow-y-scroll',
    ],
  );
  const itemClass = clsx(
    [
      'flex',
      'border',
      'border-primary',
      'bg-primary',
      'text-basic',
      'rounded-lg',
      'px-4',
      'py-2',
      'mb-4',
      'text-left',
      'w-full',
      'space-x-2',
      'items-center',
      'hover:bg-basic',
      'hover:text-primary',
    ],
  );

  return (
    <div className={containerClass}>
      <button className={itemClass} type="button">
        <div className="h-12 w-12 shrink-0">
          <Image alt="pp" round />
        </div>
        <div>
          <p className="font-bold">romain_nonym</p>
          <p>Salut</p>
        </div>
      </button>
      <button className={itemClass} type="button">
        <div className="h-12 w-12 shrink-0">
          <Image alt="pp" round />
        </div>
        <div>
          <p className="font-bold">thomas_bg13</p>
          <p>Salut, j ai rien à te dire mais faut que j ecrive</p>
        </div>
      </button>
      <button className={itemClass} type="button">
        <div className="h-12 w-12 shrink-0">
          <Image alt="pp" round />
        </div>
        <div>
          <p className="font-bold">thomas_bg13</p>
          <p>Salut, j ai rien à te dire mais faut que j ecrive</p>
        </div>
      </button>
      <button className={itemClass} type="button">
        <div className="h-12 w-12 shrink-0">
          <Image alt="pp" round />
        </div>
        <div>
          <p className="font-bold">thomas_bg13</p>
          <p>Salut, j ai rien à te dire mais faut que j ecrive</p>
        </div>
      </button>
      <button className={itemClass} type="button">
        <div className="h-12 w-12 shrink-0">
          <Image alt="pp" round />
        </div>
        <div>
          <p className="font-bold">thomas_bg13</p>
          <p>Salut, j ai rien à te dire mais faut que j ecrive</p>
        </div>
      </button>
      <button className={itemClass} type="button">
        <div className="h-12 w-12 shrink-0">
          <Image alt="pp" round />
        </div>
        <div>
          <p className="font-bold">thomas_bg13</p>
          <p>Salut, j ai rien à te dire mais faut que j ecrive</p>
        </div>
      </button>
      <button className={itemClass} type="button">
        <div className="h-12 w-12 shrink-0">
          <Image alt="pp" round />
        </div>
        <div>
          <p className="font-bold">thomas_bg13</p>
          <p>Salut, j ai rien à te dire mais faut que j ecrive</p>
        </div>
      </button>
    </div>
  );
}
