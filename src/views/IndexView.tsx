import React, { ReactElement, useEffect } from 'react';
import Post from '../components/elements/Post/Post';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import postService from '../api/post/service';
import { setPosts } from '../store/reducers/post/reducer';

export default function IndexView(): ReactElement {
  const posts = useAppSelector((state) => state.posts);
  const { informations } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    postService.getPosts()
      .then((response) => dispatch(setPosts(response.map((post) => ({
        ...post,
        currentUser: informations?._id === post.user._id,
        comments: post.comments.map((comment) => ({
          ...comment,
          currentUser: informations?._id === comment.user._id,
        })),
      })))));
  }, [dispatch, informations]);

  return (
    <div className="w-full max-w-lg content-center">
      {posts.map((post) => (<Post key={post._id} post={post} />))}
    </div>
  );
}
