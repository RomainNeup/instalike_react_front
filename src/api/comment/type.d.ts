interface PostComment {
  id: string;
  post: string;
  user: User;
  text: string;
  currentUser?: boolean;
}

type CommentResponse = {
  comment: PostComment;
};
