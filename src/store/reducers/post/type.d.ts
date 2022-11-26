interface PostState {
  posts: Post[];
}

interface LikeAction {
  _id: string;
  like: boolean;
}

interface FollowAction {
  _id: string;
  follow: boolean;
}
