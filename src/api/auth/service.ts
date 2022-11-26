import API from '../api';

class AuthService {
  public static login(identifier: string, password: string): Promise<User> {
    return API.post<User>('auth/login', {
      identifier,
      password,
    }).then((a) => (a.data));
  }

  public static register(
    username: string,
    email: string,
    password: string,
  ): Promise<User> {
    return API.post<User>('auth/register', {
      username,
      email,
      password,
    }).then((a) => a.data);
  }

  public static logout(): Promise<void> {
    return API.get('auth/logout');
  }
}

export default AuthService;
