import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user/reducer';
import postReducer from './reducers/post/reducer';
import usersReducer from './reducers/users/reducer';
import { loadState, saveState } from './localStorage';

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
    users: usersReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => saveState(store.getState()));

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
