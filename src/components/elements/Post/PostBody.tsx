import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import Icon from '../../base/Icons/Icon';
import P from '../../base/Texts/P';
import Image from '../../base/Images/Image';
import PostService from '../../../api/post/service';
import { likePost, editPost, deletePost } from '../../../store/reducers/post/reducer';
import { useAppDispatch } from '../../../store/hooks';
import PostComment from './PostComment';
import UserText from '../../base/Texts/UserText';

export default function PostBody({ post, imageFull }: PostProps): ReactElement {
  const { t } = useTranslation('post');
  const dispatch = useAppDispatch();
  const handleLike = () => {
    PostService.likePost(post.id)
      .then((like) => dispatch(likePost({ id: post.id, like })));
  };
  const handleEditPost = (description: string) => {
    PostService.editPost(post.id, description)
      .then((newPost) => {
        dispatch(editPost({ ...post, description: newPost.description }));
      });
  };
  const handleDeletePost = () => {
    PostService.deletePost(post.id)
      .then(() => dispatch(deletePost(post.id)));
  };
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
        <Icon name="favorite" color="secondary" className="mr-2" onClick={handleLike} plain={post.isLiked} />
        <Icon name="chat_bubble" color="secondary" />
        <P className="font-light">
          {t('likes', { count: post.likes })}
        </P>
        <UserText
          handleDelete={handleDeletePost}
          handleEdit={handleEditPost}
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
