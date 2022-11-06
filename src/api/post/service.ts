import API from '../api';

class PostApi {
  public getPosts(): Promise<Post[]> {
    return API.get<PostResponse>('post/getPosts').then((a) => a.data.posts);
  }

  public getPost(id: string): Promise<Post> {
    return API.get<PostResponse>(`post/getPost/${id}`).then((a) => a.data.post);
  }

  public savePost(post: Post): Promise<Post> {
    return API.post<PostResponse>('post/save', post).then((a) => a.data.post);
  }

  public deletePost(id: string): Promise<void> {
    return API.delete<void>(`post/${id}`).then((a) => a.data);
  }

  public editPost(id: string, post: Post): Promise<Post> {
    return API.put<PostResponse>(`post/edit/${id}`, post).then((a) => a.data.post);
  }

  public likePost(id: string): Promise<boolean> {
    return API.put<LikeResponse>(`post/like/${id}`).then((a) => a.data.isLiked);
  }
}

export default new PostApi();
