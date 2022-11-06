import API from '../api';

class UserApi {
  public login(identifier: string, password: string): Promise<User> {
    return API.post<UserResponse>('user/login', {
      identifier,
      password,
    }).then((a) => (a.data.user));
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

  getUserProfile(username: string): Promise<User> {
    return API.get<ProfileResponse>(`user/getWebProfile/${username}`).then((a) => a.data.webProfile);
  }

  public followUser(id: string): Promise<boolean> {
    return API.put<FollowResponse>(`user/follow/${id}`).then((a) => a.data.isFollower);
  }
}

export default new UserApi();
