import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Image from '../../base/Images/Image';
import Button from '../../base/Buttons/Button';

export default function ChatList({
  className,
  currentConversation,
  conversations,
}: ChatListProps): ReactElement {
  const containerClass = clsx(
    className,
    [
      'overflow-y-scroll',
      'space-y-4',
    ],
  );

  return (
    <div className={containerClass}>
      {conversations.map((c) => (
        <Button to={`/chat/${c.id}`} fullWidth className="flex space-x-2 relative" textAlignment="left" key={c.id} plain={c.id === currentConversation}>
          <div className="relative h-12 w-12 shrink-0">
            {c.unreadMessages && <span className="absolute rounded-full h-3 w-3 bg-secondary animate-pulse -top-1 -right-1" />}
            <Image
              src={c.user ? c.user.media?.url : c.creator.media?.url}
              alt={c.user ? c.user.username : c.creator.username}
              round
            />
          </div>
          <div className="grow-0 overflow-hidden">
            <p className="font-bold">
              {c.user ? c.user.username : c.creator.username}
            </p>
            <p className="truncate">{c.lastMessage?.text || 'Dites bonjour 👋'}</p>
          </div>
        </Button>
      ))}
    </div>
  );
}
