import React, { FormEvent, ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from '../../base/Images/Image';
import Input from '../../base/Inputs/Input';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import CommentService from '../../../api/comment/service';
import { addComment } from '../../../store/reducers/post/reducer';

export default function PostFooter({ post }: PostProps): ReactElement {
  const { t } = useTranslation('post');
  const { informations } = useAppSelector((state) => state.user);
  const [comment, setComment] = useState('');
  const dispatch = useAppDispatch();
  const handleAddComment = (event: FormEvent) => {
    if (informations) {
      event.preventDefault();
      CommentService.saveComment(post._id, comment)
        .then((response) => {
          dispatch(addComment({
            ...response,
            user: informations,
          }));
          setComment('');
        });
    }
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
              placeholder={t('comment.add')}
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
