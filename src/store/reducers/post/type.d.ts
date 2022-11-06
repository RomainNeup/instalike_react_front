interface PostState {
  posts: Post[];
}

interface LikeAction {
  _id: string;
  isLiked: boolean;
}

interface FollowAction {
  _id: string;
  isFollowed: boolean;
}
