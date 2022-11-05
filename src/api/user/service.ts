import API from '../api';

class UserApi {
  public login(identifier: string, password: string): Promise<User> {
    return API.post<UserResponse>('user/login', {
      identifier,
      password,
    }).then((a) => ({ ...a.data.user, id: a.data.user._id }));
  }

  public register(
    username: string,
    email: string,
    password: string,
  ): Promise<User> {
    return API.post<UserResponse>('user/save', {
      username,
      email,
      password,
    }).then((a) => a.data.user);
  }
}

export default new UserApi();
