import { useDispatch } from 'react-redux';
import UserApi from '../../../api/user/UserApi';
import { loginUser } from '../../reducers/userReducer';

const userApi = new UserApi();

export default function useLogin(
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
