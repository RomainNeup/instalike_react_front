import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ErrorType[] = [];

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    addError(state, action: PayloadAction<ErrorType>) {
      if (!action.payload || state.find((e) => e.code === action.payload.code)) return;
      state.push(action.payload);
    },
    removeError(state, action: PayloadAction<string>) {
      return state.filter((e) => e.code !== action.payload);
    },
  },
});

export const { addError, removeError } = errorSlice.actions;

export default errorSlice.reducer;
