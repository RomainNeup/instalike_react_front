import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import Icon from '../../base/Icons/Icon';
import P from '../../base/Texts/P';
import Image from '../../base/Images/Image';
import PostComment from './PostComment';
import UserText from '../../base/Texts/UserText';
import { usePost } from '../../../store/reducers/post/hooks';

export default function PostBody({ post, imageFull, commentPost }: PostProps): ReactElement {
  const { t } = useTranslation('post');
  const { likePost, updatePost, removePost } = usePost(post.id);
  const imageClass = clsx(
    'w-full',
    {
      'max-h-96': !imageFull,
    },
  );

  return (
    <div className="mb-4">
      <Image className={imageClass} src={post.media?.url} alt={post.description} border="primary" />
      <div className="mt-4">
        <Icon name="favorite" color="secondary" className="mr-2" onClick={likePost} plain={post.isLiked} />
        <Icon name="chat_bubble" color="secondary" onClick={commentPost} />
        <P className="font-light">
          {t('likes', { count: post.likes })}
        </P>
        <UserText
          handleDelete={removePost}
          handleEdit={updatePost}
          isEditable={post.user.currentUser}
          text={post.description}
          username={post.user.username}
          className="mb-2"
        />

        {post.comments && post.comments.map((comment) => (
          <PostComment comment={{ ...comment, post: post.id }} key={comment.id} />
        ))}
      </div>
    </div>
  );
}
