import React, { ReactElement, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Image from '../../base/Images/Image';
import Input from '../../base/Inputs/Input';
import Message from './Message';

export default function ChatBox({
  user,
  messages,
  postMessage,
}: ChatBoxProps): ReactElement {
  const { t } = useTranslation('chat');
  const [message, setMessage] = React.useState<string>('');
  const addMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postMessage(message)
      .then(() => setMessage(''));
  };
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="w-2/3 h-full flex flex-col justify-between">
      <div className="flex border-b border-secondary text-primary pb-4 items-center">
        <div className="h-12 w-12 mr-2">
          <Image src={user.media?.url} alt={user.username} round />
        </div>
        <p className="font-bold">{user.username}</p>
      </div>
      <div className="overflow-y-scroll py-4 align-bottom h-4/5">
        {
          messages.map((m) => (
            <Message
              text={m.text}
              key={m.id}
              id={m.id}
              user={m.user}
              createdAt={new Date().toLocaleTimeString()}
            />
          ))
        }
        <div ref={messagesEndRef} />
      </div>
      <form className="flex items-end w-100 text-primary" onSubmit={addMessage}>
        <Input type="text" placeholder={t('chatbar.placeholder')} className="grow" value={message} onChange={(e) => setMessage(e.target.value)} />
      </form>
    </div>
  );
}
