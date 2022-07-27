import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { blogs } from "../constants";

const initialState = {
  blogs: blogs,
  blog: {},
  selectedBlogDetails: {},
};

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog: {
      reducer: (state: any, action: any) => {
        state.blogs.push(action.payload);
        state.blog = action.payload;
      },
      prepare: ({ title, content }) => {
        return { payload: { title, content } };
      },
    },
    selectedBlog: {
      reducer: (state: any, action: any) => {
        state.selectedBlogDetails = action.payload;
      },
      prepare: (selectedBlog) => {
        return { payload: selectedBlog };
      },
    },
  },
});

export const { addBlog, selectedBlog } = blogsSlice.actions;
export default blogsSlice.reducer;
