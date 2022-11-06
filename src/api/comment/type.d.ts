interface PostComment {
  _id: string;
  post: string;
  user: User;
  text: string;
}

type CommentResponse = {
  comment: PostComment;
};
