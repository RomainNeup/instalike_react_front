import API from '../api';

class UserApi {
  public static getUser(username: string): Promise<User> {
    return API.get<User>(`user/${username}`).then((a) => a.data);
  }

  public static getCurrentUser(): Promise<User> {
    return API.get<User>('user').then((a) => a.data);
  }

  public static editUser(username: string, description: string, mediaId?: string): Promise<User> {
    return API.put<User>('user', {
      username,
      description,
      media: mediaId || null,
    }).then((a) => a.data);
  }

  public static deleteUser(): Promise<void> {
    return API.delete('user');
  }

  public static followUser(id: string): Promise<boolean> {
    return API.put<FollowResponse>(`user/follow/${id}`).then((a) => a.data.follow);
  }

  public static searchUser(username: string): Promise<SearchUser[]> {
    return API.get<SearchUser[]>(`user/search/${username}`).then((a) => a.data);
  }
}

export default UserApi;
