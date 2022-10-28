import API from '../Api';

export default class UserApi extends API {
  public login(identifier: string, password: string): Promise<User> {
    return this.post('user/login', {
      identifier,
      password,
    });
  }

  public register(
    username: string,
    email: string,
    password: string,
  ): Promise<User> {
    return this.post('user/save', {
      username,
      email,
      password,
    });
  }
}
