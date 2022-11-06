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

// TODO: move this to a separate file
interface Media {
  _id: string;
  mimetype: string;
  url: string;
}

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
