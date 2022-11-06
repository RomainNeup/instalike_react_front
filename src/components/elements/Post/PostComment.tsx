import React, { ReactElement } from 'react';
import Image from '../../base/Images/Image';
import commentService from '../../../api/comment/service';
import { useAppDispatch } from '../../../store/hooks';
import { deleteComment, editComment } from '../../../store/reducers/post/reducer';
import UserText from './UserText';

export default function PostComment({ comment }: PostCommentProps): ReactElement {
  const dispatch = useAppDispatch();

  const handleEditComment = (text: string) => {
    commentService.editComment(comment._id, text)
      .then((newCom) => {
        dispatch(editComment({ ...comment, text: newCom.text }));
      });
  };
  const handleDeleteComment = () => {
    commentService.deleteComment(comment._id)
      .then(() => dispatch(deleteComment(comment)));
  };

  return (
    <div className="flex flex-row space-x-4 mb-2">
      <div className="w-8 h-8 min-w-fit">
        <Image
          round
          border="secondary"
          alt={comment.user.username}
          src={comment.user.media?.url}
        />
      </div>
      <UserText
        handleDelete={handleDeleteComment}
        handleEdit={handleEditComment}
        isEditable={comment.currentUser}
        text={comment.text}
        username={comment.user.username}
      />
    </div>
  );
}
