import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Icon from '../../base/Icons/Icon';
import P from '../../base/Texts/P';
import Image from '../../base/Images/Image';
import PostService from '../../../api/post/service';
import { likePost, editPost, deletePost } from '../../../store/reducers/post/reducer';
import { useAppDispatch } from '../../../store/hooks';
import PostComment from './PostComment';
import UserText from './UserText';

export default function PostBody({ post, imageFull }: PostProps): ReactElement {
  const dispatch = useAppDispatch();
  const handleLike = () => {
    PostService.likePost(post._id)
      .then((like) => dispatch(likePost({ _id: post._id, like })));
  };
  const handleEditPost = (description: string) => {
    PostService.editPost(post._id, description)
      .then((newPost) => {
        dispatch(editPost({ ...post, description: newPost.description }));
      });
  };
  const handleDeletePost = () => {
    PostService.deletePost(post._id)
      .then(() => dispatch(deletePost(post._id)));
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
          {post.likes}
          {' '}
          j&apos;aime
        </P>
        <UserText
          handleDelete={handleDeletePost}
          handleEdit={handleEditPost}
          isEditable={post.currentUser}
          text={post.description}
          username={post.user.username}
          className="mb-2"
        />

        {post.comments.map((comment) => (
          <PostComment comment={{ ...comment, post: post._id }} key={comment._id} />
        ))}
      </div>
    </div>
  );
}
