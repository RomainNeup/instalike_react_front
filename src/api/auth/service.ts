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

  public static getSocketToken(): Promise<string> {
    return API.get('auth/socket').then((a) => a.data.token);
  }
}

export default AuthService;
