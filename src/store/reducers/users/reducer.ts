import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: User[] = [];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(users, action: PayloadAction<User>): User[] {
      const userFound = users.find((user) => user._id === action.payload._id);
      if (!userFound) {
        action.payload.posts?.reverse();
        return [...users, action.payload];
      }
      return users;
    },
    followUser(users, action: PayloadAction<FollowAction>): User[] {
      return users.map((user) => {
        if (user._id === action.payload._id && user.followers !== undefined) {
          return {
            ...user,
            isFollower: action.payload.isFollowed,
            followers: action.payload.isFollowed ? user.followers + 1 : user.followers - 1,
          };
        }
        return user;
      });
    },
    editUser(users, action: PayloadAction<User>): User[] {
      return users.map((user) => {
        if (user._id === action.payload._id) {
          return {
            ...user,
            ...action.payload,
          };
        }
        return user;
      });
    },
  },
});

export const { addUser, followUser, editUser } = usersSlice.actions;
export default usersSlice.reducer;
