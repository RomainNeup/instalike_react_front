import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: User[] = [];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(users, action: PayloadAction<User>): User[] {
      action.payload.posts?.reverse();
      return [...users, action.payload];
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
  },
});

export const { addUser, followUser } = usersSlice.actions;
export default usersSlice.reducer;
