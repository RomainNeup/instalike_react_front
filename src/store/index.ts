import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user/reducer';
import postReducer from './reducers/post/reducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
