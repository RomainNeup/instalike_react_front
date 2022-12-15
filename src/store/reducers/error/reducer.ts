import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ErrorType[] = [];

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    addError(state, action: PayloadAction<ErrorType>) {
      state.push(action.payload);
    },
    removeError(state, action: PayloadAction<string>) {
      return state.filter((e) => e.code !== action.payload);
    },
  },
});

export const { addError, removeError } = errorSlice.actions;

export default errorSlice.reducer;
