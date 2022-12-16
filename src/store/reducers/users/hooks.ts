import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from '../../hooks';
import useErrors from '../error/hooks';
import { addUser, followUser as followUserPostAction } from './reducer';
import UserService from '../../../api/user/service';
import { followUser as followUserUsersAction } from '../post/reducer';

export default function useUser({ id, username }: { id?: string, username?: string }) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const { addError } = useErrors();
  const user = useAppSelector((state) => state.users.find((u) => u.username === username));

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

  useEffect(() => {
    if (username && !user) {
      setLoading(true);
      UserService.getUser(username)
        .then((res) => dispatch(addUser(res)))
        .catch((err: AxiosError<ErrorResponse>) => {
          setLoading(false);
          if (err.response) {
            addError(err.response.data.error);
          }
        });
    } else {
      setLoading(false);
    }
  }, [username, user, addError, dispatch]);

  return {
    user,
    loading,
    followUser,
  };
}
