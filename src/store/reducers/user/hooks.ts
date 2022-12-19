import { useState } from 'react';
import { AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { editUser, loginUser, logoutUser } from './reducer';
import { clearUsers, editUser as editUserInUsers } from '../users/reducer';
import { clearConversation } from '../conversation/reducer';
import useErrors from '../error/hooks';
import AuthService from '../../../api/auth/service';
import UserService from '../../../api/user/service';
import UploadService from '../../../api/upload/service';

export default function useUser() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const { addError } = useErrors();
  const currentUser = useAppSelector((state) => state.user.informations);
  const [users, setUsers] = useState<UserSearchSelect[]>([]);

  const selectUser = (id: string, selected: boolean) => {
    setUsers((prev) => prev.map((u) => ({
      ...u,
      selected: u.id === id && selected,
    })));
  };

  const searchUser = (u: string) => {
    setLoading(true);
    if (u) {
      UserService.searchUser(u)
        .then((res) => {
          setUsers(res.filter((user) => user.id !== currentUser?.id));
          setLoading(false);
        })
        .catch((err: AxiosError<ErrorResponse>) => {
          setLoading(false);
          if (err.response) {
            addError(err.response.data.error);
          }
        });
    } else {
      setUsers((prev) => prev.filter((user) => user.selected));
    }
  };

  const getUser = () => {
    UserService.getCurrentUser()
      .then((res) => dispatch(loginUser(res)))
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          dispatch(logoutUser());
          addError(err.response.data.error);
        }
      });
  };

  const login = (email: string, password: string) => {
    AuthService.login(email, password)
      .then(getUser)
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  };

  const register = (username: string, email: string, password: string) => {
    AuthService.register(username, email, password)
      .then(() => login(email, password))
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  };

  const edit = (
    username: string,
    description: string,
    mediaId?: string,
  ) => UserService.editUser(username, description, mediaId)
    .then((user) => {
      dispatch(editUser(user));
      dispatch(editUserInUsers(user));
    });

  const editProfile = (username: string, description: string, media?: File | null) => {
    if (!media) return edit(username, description);
    return UploadService.uploadMedia(media)
      .then((mediaId) => edit(username, description, mediaId))
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  };

  const deleteUser = () => {
    UserService.deleteUser()
      .then(() => dispatch(logoutUser()))
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  };

  const logout = () => {
    AuthService.logout()
      .then(() => {
        dispatch(logoutUser());
        dispatch(clearUsers());
        dispatch(clearConversation());
      })
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  };

  return {
    currentUser,
    login,
    register,
    logout,
    loading,
    editProfile,
    deleteUser,
    searchUser,
    selectUser,
    users,
  };
}
