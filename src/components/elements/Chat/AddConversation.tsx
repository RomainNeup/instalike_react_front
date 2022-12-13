import React, { ReactElement, useEffect, useState } from 'react';
import clsx from 'clsx';
import H3 from '../../base/Titles/H3';
import Input from '../../base/Inputs/Input';
import Button from '../../base/Buttons/Button';
import Checkbox from '../../base/Inputs/Checkbox';
import UserService from '../../../api/user/service';
import ConversationService from '../../../api/conversation/service';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addConversation } from '../../../store/reducers/conversation/reducer';

export default function AddConversation({
  open = false, className, close,
}: AddConversationProps): ReactElement {
  const { informations } = useAppSelector((state) => state.user);
  const [userInput, setUserInput] = useState('');
  const [users, setUsers] = useState<UserSearchSelect[]>([]);
  const dispatch = useAppDispatch();
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
    if (userInput) {
      UserService.searchUser(userInput).then((res) => {
        setUsers((prev) => prev.concat(
          res.filter((u) => (!prev.find((p) => p.id === u.id) && u.id !== informations?.id))
            .map((u) => ({ ...u, selected: false })),
        ));
      });
    } else {
      setUsers((prev) => prev.filter((u) => u.selected));
    }
  }, [userInput, informations]);

  const addUserToConversation = (userAdded: UserSearchSelect, selected: boolean) => {
    setUsers((prev) => prev.map((u) => ({
      ...u,
      selected: u.id === userAdded.id && selected,
    })));
  };

  const handleCreateConversation = () => {
    const user: UserSearchSelect | undefined = users.find((u) => u.selected);

    if (user) {
      ConversationService.createConversation(user.id).then((res) => {
        close();
        dispatch(addConversation(res));
      });
    }
  };

  return (
    <div tabIndex={-1} className={modalClass}>
      <div className={contentClass}>
        <H3>New conversation</H3>
        <Input className="py-4" placeholder="Search user" type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        {users.map((u) => (
          <div key={u.id}>
            <Checkbox
              label={u.username}
              onChange={(e) => addUserToConversation(u, e.target.checked)}
              checked={u.selected}
            />
          </div>
        ))}
        <Button plain fullWidth onClick={handleCreateConversation}>Create conversation</Button>
        <Button fullWidth onClick={close}>Cancel</Button>
      </div>
    </div>
  );
}
