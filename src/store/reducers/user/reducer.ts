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
        id, username, email, description, media,
      } = action.payload;
      return {
        informations: {
          id,
          username,
          email,
          description,
          media,
          currentUser: true,
        },
        isLogged: true,
      };
    },
    logoutUser(): UserState {
      return { informations: null, isLogged: false };
    },
    editUser(state, action: PayloadAction<User>): UserState {
      return {
        ...state,
        informations: {
          ...state.informations,
          ...action.payload,
        },
      };
    },
  },
});

export const { loginUser, logoutUser, editUser } = userSlice.actions;

export default userSlice.reducer;
