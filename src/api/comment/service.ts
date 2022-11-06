import API from '../api';

class CommentApi {
  public saveComment(postId: string, text: string): Promise<PostComment> {
    return API.post<PostComment>('comment/save', {
      post: postId,
      text,
    }).then((a) => ({ ...a.data, post: postId, currentUser: true }));
  }

  public deleteComment(id: string): Promise<void> {
    return API.delete<void>(`comment/delete/${id}`).then((a) => a.data);
  }

  public editComment(id: string, text: string): Promise<PostComment> {
    return API.put<PostComment>(`comment/edit/${id}`, {
      text,
    }).then((a) => a.data);
  }
}

export default new CommentApi();
