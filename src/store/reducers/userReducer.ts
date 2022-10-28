import { createSlice } from '@reduxjs/toolkit';

export const userReducer = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    description: '',
  },
  reducers: {
    loginUser: (state, action) => {
      const { username, email, description } = action.payload;
      state.username = username;
      state.email = email;
      state.description = description;
    },
    logoutUser: (state) => {
      state.username = '';
      state.email = '';
      state.description = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = userReducer.actions;

export default userReducer.reducer;
