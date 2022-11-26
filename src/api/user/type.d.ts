interface User {
  _id: string;
  username: string;
  media: Media | null;
  email?: string;
  description?: string;
  followers?: number;
  following?: number;
  isFollower?: boolean;
  posts?: Post[];
  currentUser?: boolean;
}

type FollowResponse = {
  isFollower: boolean;
};
