import React, { ReactElement, useEffect } from 'react';
import Post from '../components/elements/Post/Post';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import PostService from '../api/post/service';
import { setPosts } from '../store/reducers/post/reducer';

export default function IndexView(): ReactElement {
  const posts = useAppSelector((state) => state.posts);
  const { informations } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    PostService.getPosts()
      .then((response) => dispatch(setPosts(response.map((post) => ({
        ...post,
        user: {
          ...post.user,
          currentUser: post.user.id === informations?.id,
        },
        currentUser: informations?.id === post.user.id,
        comments: post.comments.map((comment) => ({
          ...comment,
          currentUser: informations?.id === comment.user.id,
        })),
      })))));
  }, [dispatch, informations]);

  return (
    <div className="w-full max-w-lg content-center">
      {posts.map((post) => (<Post key={post.id} post={post} />))}
    </div>
  );
}
