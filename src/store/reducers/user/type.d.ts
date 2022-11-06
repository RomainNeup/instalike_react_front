interface UserState {
  informations: User | null;
  isLogged: boolean;
}

interface FollowAction {
  _id: string;
  isFollowed: boolean;
}
