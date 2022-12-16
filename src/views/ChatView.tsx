import React, { ReactElement, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ChatList from '../components/elements/Chat/ChatList';
import Icon from '../components/base/Icons/Icon';
import Button from '../components/base/Buttons/Button';
import P from '../components/base/Texts/P';
import ChatBox from '../components/elements/Chat/ChatBox';
import AddConversation from '../components/elements/Chat/AddConversation';
import { useConversation, useConversations } from '../store/reducers/conversation/hooks';
import useUser from '../store/reducers/user/hooks';
import Body from '../components/layout/Body';

export default function ChatView(): ReactElement {
  const { t } = useTranslation('chat');
  const [open, setOpen] = useState(false);
  const { id } = useParams<string>();
  const { postMessage, messages, user } = useConversation(id);
  const { createConversation, conversations } = useConversations();
  const { currentUser } = useUser();

  return (
    <Body size="large">
      <div className="flex max-h-144 h-128 w-full overflow-hidden flex-row space-x-8">
        <div className="flex flex-col w-1/3">
          <AddConversation
            open={open}
            close={() => setOpen(false)}
            createConversation={createConversation}
          />
          <div className="pb-4 border-b border-secondary">
            <div className="h-12 flex justify-between items-center">
              <P className="font-bold">
                <Icon name="inbox" className="mr-2" color="primary" />
                {currentUser?.username}
              </P>
              <Button color="primary" onClick={() => setOpen(!open)} size="small">
                <Icon name="edit" className="mr-2" />
                {t('addConv.button')}
              </Button>
            </div>
          </div>
          <ChatList className="pt-4" currentConversation={id} conversations={conversations} />
        </div>
        {id && user && (
          <ChatBox
            messages={messages || []}
            user={user}
            postMessage={postMessage}
          />
        )}
      </div>
    </Body>
  );
}
