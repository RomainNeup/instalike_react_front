import React, { ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import H3 from '../../base/Titles/H3';
import Input from '../../base/Inputs/Input';
import Button from '../../base/Buttons/Button';
import Checkbox from '../../base/Inputs/Checkbox';
import { useConversations } from '../../../store/reducers/conversation/hooks';
import useUser from '../../../store/reducers/user/hooks';

export default function AddConversation({
  open = false, className, close,
}: AddConversationProps): ReactElement {
  const { t } = useTranslation('chat');
  const { searchUser, users, selectUser } = useUser();
  const [userInput, setUserInput] = useState('');
  const { createConversation } = useConversations();
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
  useEffect(() => {
    searchUser(userInput);
  }, [userInput]);

  const handleCreateConversation = () => {
    const user: UserSearchSelect | undefined = users.find((u) => u.selected);

    if (user) {
      createConversation(user.id);
    }
  };

  return (
    <div tabIndex={-1} className={modalClass}>
      <div className={contentClass}>
        <H3>{t('addConv.title')}</H3>
        <Input className="py-4" placeholder={t('addConv.search')} type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        {users.map((u) => (
          <div key={u.id}>
            <Checkbox
              label={u.username}
              onChange={(e) => selectUser(u.id, e.target.checked)}
              checked={u.selected}
            />
          </div>
        ))}
        <Button plain fullWidth onClick={handleCreateConversation}>{t('addConv.create')}</Button>
        <Button fullWidth onClick={close}>{t('addConv.cancel')}</Button>
      </div>
    </div>
  );
}
