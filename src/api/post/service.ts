import API from '../api';

class PostApi {
  public static getPosts(): Promise<Post[]> {
    return API.get<Post[]>('post').then((a) => a.data);
  }

  public static getPost(id: string): Promise<Post> {
    return API.get<Post>(`post/${id}`).then((a) => a.data);
  }

  public static createPost(media: string, description: string): Promise<Post> {
    return API.post<Post>('post', {
      media,
      description,
    }).then((a) => a.data);
  }

  public static deletePost(id: string): Promise<void> {
    return API.delete<void>(`post/${id}`).then((a) => a.data);
  }

  public static editPost(id: string, description: string): Promise<Post> {
    return API.put<Post>(`post/${id}`, {
      description,
    }).then((a) => a.data);
  }

  public static likePost(id: string): Promise<boolean> {
    return API.put<LikeResponse>(`post/like/${id}`).then((a) => a.data.like);
  }
}

export default PostApi;
