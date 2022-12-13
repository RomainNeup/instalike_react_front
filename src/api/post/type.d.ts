interface Post {
  id: string;
  media: Media | null;
  user: User;
  description: string;
  likes: number;
  isLiked: boolean;
  createdAt: string;
  comments: PostComment[];
  currentUser?: boolean;
}

type LikeResponse = {
  like: boolean;
};
