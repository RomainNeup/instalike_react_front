import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user/reducer';
import postReducer from './reducers/post/reducer';
import usersReducer from './reducers/users/reducer';
import conversationReducer from './reducers/conversation/reducer';
import { loadState, saveState } from './localStorage';
import errorReducer from './reducers/error/reducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
    users: usersReducer,
    conversation: conversationReducer,
    errors: errorReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => saveState(store.getState()));

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
