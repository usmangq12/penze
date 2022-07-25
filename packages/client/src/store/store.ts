import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import blogsSliceReducer from './BlogsSlice';
import commentsSliceReducer from './CommentsSlice';

export const store = configureStore({
  reducer: {
    blogs: blogsSliceReducer,
    comments: commentsSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
