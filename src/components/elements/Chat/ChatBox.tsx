import React, { ReactElement } from 'react';
// import ConversationService from '../../../api/conversation/service';
import Image from '../../base/Images/Image';
import Input from '../../base/Inputs/Input';
import Message from './Message';

export default function ChatBox({
  user,
  messages,
}: ChatBoxProps): ReactElement {
  const addConversation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ConversationService.createConversation()
  };

  return (
    <form className="w-2/3 h-full flex flex-col justify-between" onSubmit={addConversation}>
      <div className="flex border-b border-secondary text-primary pb-4 items-center">
        <div className="h-12 w-12 mr-2">
          <Image alt="" round />
        </div>
        <p className="font-bold">{user.username}</p>
      </div>
      <div className="overflow-y-scroll py-4 align-bottom h-4/5">
        {
          messages.map(() => (
            <Message
              text="Salut toi"
              id="1"
              user={{
                _id: '1',
                currentUser: false,
                username: 'test',
                media: null,
              }}
            />
          ))
        }
      </div>
      <div className="flex items-end w-100 text-primary">
        <Input type="text" placeholder="Ecrivez un message" className="grow" />
      </div>
    </form>
  );
}
