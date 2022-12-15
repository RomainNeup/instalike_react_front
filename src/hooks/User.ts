import { useState } from 'react';
import { AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loginUser, logoutUser } from '../store/reducers/user/reducer';
import useErrors from './Errors';
import AuthService from '../api/auth/service';
import UserService from '../api/user/service';

export default function useUser() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const { addError } = useErrors();
  const currentUser = useAppSelector((state) => state.user.informations);

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

  return {
    currentUser,
    login,
    register,
    loading,
  };
}
