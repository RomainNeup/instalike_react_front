import React, { FormEvent, ReactElement, useState } from 'react';
import Input from '../../base/Inputs/Input';
import Image from '../../base/Images/Image';
import Icon from '../../base/Icons/Icon';
import P from '../../base/Texts/P';
import commentService from '../../../api/comment/service';
import { useAppDispatch } from '../../../store/hooks';
import { deleteComment, editComment } from '../../../store/reducers/post/reducer';

export default function PostComment({ comment }: PostCommentProps): ReactElement {
  const dispatch = useAppDispatch();
  const [editedComment, setEditedComment] = useState<string>('');

  const handleEditComment = (event: FormEvent) => {
    event.preventDefault();
    commentService.editComment(comment._id, editedComment)
      .then((newCom) => {
        dispatch(editComment({ ...comment, text: newCom.text }));
        setEditedComment('');
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
      <div className="self-center w-100 grow">
        {
          editedComment ? (
            <form onSubmit={handleEditComment} className="flex">
              <Input
                placeholder="Modifier un commentaire..."
                noBorder
                onChange={(e) => setEditedComment(e.target.value)}
                value={editedComment}
                className="grow"
              />
              <Icon
                name="delete"
                onClick={handleDeleteComment}
                color="secondary"
                className="text-sm mx-2"
              />
              <Icon
                name="close"
                color="secondary"
                onClick={() => setEditedComment('')}
              />
            </form>
          ) : (
            <span className="font-light mb-4">
              {
                comment.currentUser && (
                  <div className="float-right">
                    <Icon
                      onClick={() => setEditedComment(comment.text)}
                      name="edit"
                      color="secondary"
                      className="mr-2 text-sm"
                    />
                  </div>
                )
              }
              <P>
                <b className="font-bold">
                  {`${comment.user.username} `}
                </b>
                {comment.text || ''}
              </P>
            </span>
          )
        }
      </div>
    </div>
  );
}
