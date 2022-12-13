interface User {
  id: string;
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
  follow: boolean;
};

interface SearchUser {
  username: string;
  id: string;
}
