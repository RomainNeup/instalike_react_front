import API from '../api';

class CommentApi {
  public saveComment(postId: string, text: string): Promise<PostComment> {
    return API.post<CommentResponse>('comment/save', {
      post: postId,
      text,
    }).then((a) => a.data.comment);
  }

  public deleteComment(id: string): Promise<void> {
    return API.delete<void>(`comment/${id}`).then((a) => a.data);
  }
}

export default new CommentApi();
