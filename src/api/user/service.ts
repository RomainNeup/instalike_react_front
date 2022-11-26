import API from '../api';

class UserApi {
  public static getUser(username: string): Promise<User> {
    return API.get<User>(`user/${username}`).then((a) => a.data);
  }

  public static getCurrentUser(): Promise<User> {
    return API.get<User>('user').then((a) => a.data);
  }

  public static editUser(user: User): Promise<User> {
    return API.put<User>('user', {
      username: user.username,
      description: user.description,
      media: user.media?._id,
    }).then((a) => a.data);
  }

  public static followUser(id: string): Promise<boolean> {
    return API.put<FollowResponse>(`user/follow/${id}`).then((a) => a.data.follow);
  }
}

export default UserApi;
