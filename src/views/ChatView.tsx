import React, { ReactElement, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChatList from '../components/elements/Chat/ChatList';
import Icon from '../components/base/Icons/Icon';
import Button from '../components/base/Buttons/Button';
import P from '../components/base/Texts/P';
import ChatBox from '../components/elements/Chat/ChatBox';
import AddConversation from '../components/elements/Chat/AddConversation';
import { useConversation } from '../store/reducers/conversation/hooks';

export default function ChatView(): ReactElement {
  const [open, setOpen] = useState(false);
  const { id } = useParams<string>();
  const { postMessage, messages, user } = useConversation(id);

  return (
    <div className="flex max-h-144 h-128 max-w-4xl w-full overflow-hidden flex-row space-x-8">
      <AddConversation open={open} close={() => setOpen(false)} />
      <div className="flex flex-col w-1/3">
        <div className="pb-4 border-b border-secondary">
          <div className="h-12 flex justify-between items-center">
            <P className="text-xl">romain_nonym</P>
            <Button color="primary" onClick={() => setOpen(!open)}>
              <Icon name="edit" />
            </Button>
          </div>
        </div>
        <ChatList className="pt-4" currentConversation={id} />
      </div>
      {id && user && (
        <ChatBox
          messages={messages || []}
          user={user}
          postMessage={postMessage}
        />
      )}
    </div>
  );
}
