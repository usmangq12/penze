import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import blogsSliceReducer from '../store/BlogsSlice';
import commentsSliceReducer from '../store/CommentsSlice';

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
