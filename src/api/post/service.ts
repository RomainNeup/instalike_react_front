import API from '../api';

class PostApi {
  public getPosts(): Promise<Post[]> {
    return API.get<PostResponse>('post/getPosts').then((a) => a.data.posts);
  }

  public getPost(id: string): Promise<Post> {
    return API.get<Post>(`post/getPost/${id}`).then((a) => a.data);
  }

  public createPost(media: string, description: string): Promise<Post> {
    return API.post<Post>('post/save', {
      media,
      description,
    }).then((a) => a.data);
  }

  public deletePost(id: string): Promise<void> {
    return API.delete<void>(`post/delete/${id}`).then((a) => a.data);
  }

  public editPost(id: string, description: string): Promise<Post> {
    return API.put<Post>(`post/edit/${id}`, {
      description,
    }).then((a) => a.data);
  }

  public likePost(id: string): Promise<boolean> {
    return API.put<LikeResponse>(`post/like/${id}`).then((a) => a.data.isLiked);
  }
}

export default new PostApi();
