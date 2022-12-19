import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: User[] = [];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(users, action: PayloadAction<User>): User[] {
      const userFound = users.find((user) => user.id === action.payload.id);
      if (!userFound) {
        action.payload.posts?.reverse();
        return [...users, action.payload];
      }
      return users;
    },
    followUser(users, action: PayloadAction<FollowAction>): User[] {
      return users.map((user) => {
        if (user.id === action.payload.id && user.followers !== undefined) {
          return {
            ...user,
            isFollower: action.payload.follow,
            followers: action.payload.follow ? user.followers + 1 : user.followers - 1,
          };
        }
        if (user.currentUser && user.following !== undefined) {
          return {
            ...user,
            following: action.payload.follow ? user.following + 1 : user.following - 1,
          };
        }
        return user;
      });
    },
    editUser(users, action: PayloadAction<User>): User[] {
      return users.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            ...action.payload,
          };
        }
        return user;
      });
    },
    clearUsers(): User[] {
      return initialState;
    },
  },
});

export const {
  addUser,
  followUser,
  editUser,
  clearUsers,
} = usersSlice.actions;
export default usersSlice.reducer;
