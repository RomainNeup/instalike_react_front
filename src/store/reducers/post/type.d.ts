interface PostState {
  posts: Post[];
}

interface LikeAction {
  id: string;
  like: boolean;
}

interface FollowAction {
  id: string;
  follow: boolean;
}
