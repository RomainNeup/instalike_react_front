import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserState = {
  informations: null,
  isLogged: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(_, action: PayloadAction<User>): UserState {
      const {
        _id, username, email, description, media,
      } = action.payload;
      return {
        informations: {
          _id,
          username,
          email,
          description,
          media,
        },
        isLogged: true,
      };
    },
    logoutUser(): UserState {
      return { informations: null, isLogged: false };
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
