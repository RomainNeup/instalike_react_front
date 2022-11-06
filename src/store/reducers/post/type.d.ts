interface PostState {
  posts: Post[];
}

interface LikeAction {
  _id: string;
  isLiked: boolean;
}
