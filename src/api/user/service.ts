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

  public getUserProfile(username: string): Promise<User> {
    return API.get<ProfileResponse>(`user/getWebProfile/${username}`).then((a) => a.data.webProfile);
  }

  public editUser(user: User): Promise<User> {
    return API.put<User>('user/edit', {
      username: user.username,
      description: user.description,
      media: user.media?._id,
    }).then((a) => a.data);
  }

  public followUser(id: string): Promise<boolean> {
    return API.put<FollowResponse>(`user/follow/${id}`).then((a) => a.data.isFollower);
  }
}

export default new UserApi();
