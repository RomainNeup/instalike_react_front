interface Post {
  _id: string;
  media: Media | null;
  user: User;
  description: string;
  likes: number;
  isLiked: boolean;
  createdAt: string;
  comments: PostComment[];
  currentUser?: boolean;
}

type PostResponse = {
  post: Post;
  posts: Post[];
};

type LikeResponse = {
  isLiked: boolean;
};
