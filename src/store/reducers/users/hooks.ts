import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from '../../hooks';
import useErrors from '../error/hooks';
import {
  addUser,
  editUser,
  followUser as followUserUsersAction,
} from './reducer';
import UserService from '../../../api/user/service';
import { followUser as followUserPostAction } from '../post/reducer';
import useCurrentUser from '../user/hooks';

export default function useUser({ id, username }: { id?: string, username?: string }) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const { addError } = useErrors();
  const { currentUser } = useCurrentUser();
  const user = useAppSelector((state) => state.users.find(
    (u) => (username && u.username === username)
      || (id && u.id === id)
      || (currentUser && u.id === currentUser?.id),
  ));

  const followUser = () => {
    if (!id) return;
    UserService.followUser(id)
      .then((follow) => {
        dispatch(followUserPostAction({ id, follow }));
        dispatch(followUserUsersAction({ id, follow }));
      })
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  };

  const addPostToUser = (post: Post) => {
    if (!user) return;
    dispatch(editUser({ ...user, posts: [post, ...user?.posts || []] }));
  };

  const editPostFromUser = (post: Post) => {
    if (!user) return;
    dispatch(editUser({
      ...user, posts: user?.posts?.map((p) => (p.id === post.id ? post : p)) || [],
    }));
  };

  const deletePostFromUser = (postId: string) => {
    if (!user) return;
    dispatch(editUser({ ...user, posts: user?.posts?.filter((p) => p.id !== postId) || [] }));
  };

  useEffect(() => {
    if (username && !user) {
      setLoading(true);
      UserService.getUser(username)
        .then((res) => dispatch(addUser({
          ...res,
          currentUser: currentUser?.id === res.id,
        })))
        .catch((err: AxiosError<ErrorResponse>) => {
          setLoading(false);
          if (err.response) {
            addError(err.response.data.error);
          }
        });
    } else {
      setLoading(false);
    }
  }, [username, user, addError, dispatch, currentUser]);

  return {
    user,
    loading,
    followUser,
    addPostToUser,
    deletePostFromUser,
    editPostFromUser,
  };
}
