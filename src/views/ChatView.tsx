import React, { ReactElement } from 'react';
import ChatList from '../components/elements/Chat/ChatList';
import Icon from '../components/base/Icons/Icon';
import Button from '../components/base/Buttons/Button';
import P from '../components/base/Texts/P';
import ChatBox from '../components/elements/Chat/ChatBox';
import AddConversation from '../components/elements/Chat/AddConversation';

export default function ChatView(): ReactElement {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex max-h-144 max-w-4xl overflow-hidden flex-row space-x-8">
      <div className="flex flex-col w-1/3">
        <div className="pb-4 flex justify-between border-b border-secondary items-center">
          <div className="h-12" />
          <P className="text-xl">romain_nonym</P>
          <AddConversation open={open} close={() => setOpen(false)} />
          <Button color="primary" onClick={() => setOpen(!open)}>
            <Icon name="edit" />
          </Button>
        </div>
        <ChatList className="pt-4" />
      </div>
      <ChatBox messages={[]} user={{ _id: '', username: '', media: null }} />
    </div>
  );
}
