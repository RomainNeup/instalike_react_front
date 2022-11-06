import React, { FormEvent, useState } from 'react';
import Image from '../../base/Images/Image';
import Input from '../../base/Inputs/Input';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import commentService from '../../../api/comment/service';
import { addComment } from '../../../store/reducers/post/reducer';

export default function PostFooter({ post }: PostProps): JSX.Element {
  const { informations } = useAppSelector((state) => state.user);
  const [comment, setComment] = useState('');
  const dispatch = useAppDispatch();
  const handleAddComment = (event: FormEvent) => {
    event.preventDefault();
    commentService.saveComment(post._id, comment)
      .then((response) => {
        dispatch(addComment(response));
        setComment('');
      });
  };

  return (
    <div className="mb-4">
      <div className="flex flex-row space-x-4 mb-4">
        <div className="w-8 h-8">
          <Image src={informations?.media?.url} alt="User picture" border="secondary" round />
        </div>
        <div className="self-center w-100 grow">
          <form onSubmit={handleAddComment}>
            <Input
              placeholder="Ajouter un commentaire..."
              noBorder
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
