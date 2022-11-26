import API from '../api';

class CommentApi {
  public static saveComment(postId: string, text: string): Promise<PostComment> {
    return API.post<PostComment>('comment', {
      post: postId,
      text,
    }).then((a) => ({ ...a.data, post: postId, currentUser: true }));
  }

  public static deleteComment(id: string): Promise<void> {
    return API.delete<void>(`comment/${id}`).then((a) => a.data);
  }

  public static editComment(id: string, text: string): Promise<PostComment> {
    return API.put<PostComment>(`comment/${id}`, {
      text,
    }).then((a) => a.data);
  }
}

export default CommentApi;
