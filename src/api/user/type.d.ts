interface User {
  _id: string;
  username: string;
  media: Media | null;
  email?: string;
  description?: string;
  followers?: number;
  following?: number;
  isFollower?: boolean;
}

type UserResponse = {
  user: User;
};

interface Login {
  identifier: string;
  password: string;
}

interface Register {
  username: string;
  email: string;
  password: string;
}

type FollowResponse = {
  isFollower: boolean;
};
