import { useDispatch } from 'react-redux';
import { UserApi } from '../../../api';
import { loginUser } from '../..';

const userApi = new UserApi();

export function login(
  identifier: string,
  password: string,
) {
  const dispatch = useDispatch();

  return userApi.login(identifier, password)
    .then((user) => {
      if (user) {
        dispatch(loginUser(user));
      }
    });
}
