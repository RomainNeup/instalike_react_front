interface User {
  id: string;
  username: string;
  email: string;
  media: Media | null;
  description?: string;
}

type UserResponse = {
  user: User & { _id: string };
};

// TODO: move this to a separate file
interface Media {
  id: string;
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
