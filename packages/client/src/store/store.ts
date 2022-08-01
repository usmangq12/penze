import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { blogsSlice, createBlogSlice, blogDetiailsSlice } from "./BlogsSlice";
import commentsSliceReducer from "./CommentsSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsSlice.reducer,
    createBlog: createBlogSlice.reducer,
    getBlogDetail: blogDetiailsSlice.reducer,
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
