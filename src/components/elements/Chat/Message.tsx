import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Image from '../../base/Images/Image';
import UserText from '../../base/Texts/UserText';
import MessageService from '../../../api/message/service';
import { useAppDispatch } from '../../../store/hooks';
import { deleteMessage, editMessage } from '../../../store/reducers/conversation/reducer';

export default function Message({
  id, text, user, className,
}: MessageProps): ReactElement {
  const dispatch = useAppDispatch();
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
      'relative',
      'flex',
      'flex-col',
      'space-y-1',
    ],
    user.currentUser ? 'bg-secondary rounded-l-lg' : 'bg-primary rounded-r-lg',
  );
  const handleEditMessage = (newText: string) => {
    MessageService.editMessage(id, newText)
      .then((newMessage) => {
        console.log(newMessage);
        dispatch(editMessage(newMessage));
      });
  };
  const handleDeleteMessage = () => {
    MessageService.deleteMessage(id)
      .then(() => dispatch(deleteMessage(id)));
  };

  return (
    <div className={containerClass}>
      <div className="h-12 w-12 shrink-0">
        <Image src={user.media?.url} alt="Avatar" round />
      </div>
      <div className={messageClass}>
        <UserText
          handleDelete={handleDeleteMessage}
          handleEdit={handleEditMessage}
          text={text}
          color="basic"
          isEditable={user.currentUser}
        />
      </div>
      <div className="h-12 w-12 shrink-0" />
    </div>
  );
}
