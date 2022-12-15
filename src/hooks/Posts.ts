import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import PostApi from '../api/post/service';
import { setPosts as dispatchPosts } from '../store/reducers/post/reducer';
import useErrors from './Errors';

interface Return {
  posts: Post[],
  loading: boolean,
}

export default function usePosts(): Return {
  const user = useAppSelector((state) => state.user.informations);
  const [userId, setUserId] = useState<string>();
  const posts = useAppSelector((state) => state.posts);
  const [loading, setLoading] = useState<boolean>(false);
  const { addError } = useErrors();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) setUserId(user.id);
  }, [user]);

  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    PostApi.getPosts()
      .then((res) => {
        dispatch(dispatchPosts(res.map<Post>((post): Post => ({
          ...post,
          user: {
            ...post.user,
            currentUser: post.user.id === userId,
          },
          comments: post.comments.map((comment) => ({
            ...comment,
            user: {
              ...comment.user,
              currentUser: comment.user.id === userId,
            },
          })),
        }))));
        setLoading(false);
      })
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  }, [userId, dispatch]);

  return {
    posts,
    loading,
  };
}
