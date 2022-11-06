import React from 'react';
import Icon from '../../base/Icons/Icon';
import P from '../../base/Texts/P';
import Image from '../../base/Images/Image';
import postService from '../../../api/post/service';
import { likePost } from '../../../store/reducers/post/reducer';
import { useAppDispatch } from '../../../store/hooks';
import PostComment from './PostComment';

export default function PostBody({ post, className }: PostProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleLike = () => {
    postService.likePost(post._id)
      .then((isLiked) => dispatch(likePost({ _id: post._id, isLiked })));
  };

  return (
    <div className={`${className}`}>
      <Image className="h-96 w-full" src={post.media?.url} alt={post.description} border="primary" />
      <div className="mt-4">
        <Icon name="favorite" color="secondary" className="mr-2" onClick={handleLike} plain={post.isLiked} />
        <Icon name="chat_bubble" color="secondary" />
        <P className="font-light">
          {post.likes}
          {' '}
          j&apos;aime
        </P>
        <P className="font-light mb-4">
          <b className="font-bold">
            {post.user.username}
            {' '}
          </b>
          {post.description}
        </P>
        {post.comments.map((comment) => (<PostComment comment={comment} key={comment._id} />))}
      </div>
    </div>
  );
}
