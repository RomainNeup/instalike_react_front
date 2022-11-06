interface PostComment {
  _id: string;
  post: string;
  user: User;
  text: string;
  currentUser?: boolean;
}

type CommentResponse = {
  comment: PostComment;
};
