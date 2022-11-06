interface Post {
  _id: string;
  media: Media | null;
  user: User;
  description: string;
  likes: number;
  isLiked: boolean;
  createdAt: string;
  comments: PostComment[];
}

type PostResponse = {
  post: Post;
  posts: Post[];
};

type LikeResponse = {
  isLiked: boolean;
};
