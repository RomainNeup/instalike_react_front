import React, { ReactElement } from 'react';
import Image from '../../base/Images/Image';
import UserText from '../../base/Texts/UserText';
import { useComment } from '../../../store/reducers/post/hooks';

export default function PostComment({ comment }: PostCommentProps): ReactElement {
  const { deleteComment, editComment } = useComment();

  return (
    <div className="flex flex-row space-x-4 mb-2">
      <div className="w-8 h-8 shrink-0 grow-0">
        <Image
          round
          border="secondary"
          alt={comment.user.username}
          src={comment.user.media?.url}
        />
      </div>
      <UserText
        handleDelete={deleteComment}
        handleEdit={editComment}
        isEditable={comment.user.currentUser}
        text={comment.text}
        username={comment.user.username}
      />
    </div>
  );
}
