import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  informations: User | null;
  isLogged: boolean;
}

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
        id, username, email, description, media,
      } = action.payload;
      return {
        informations: {
          id,
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
