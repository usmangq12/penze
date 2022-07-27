import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllBlogs } from "../services/ResquestService";
import { IBlog } from "../types";

export const fetchBlogs = createAsyncThunk("", async () => {
  const response = await getAllBlogs();
  console.log({ response: response.data });
  return response.data;
});

interface IBlogsState {
  blogs: IBlog[];
  selectedBlogDetails: {};
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  blogs: [],
  selectedBlogDetails: {},
  loading: "idle",
} as IBlogsState;

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    // addBlog: {
    //   reducer: (state: any, action: any) => {
    //     state.blogs.push(action.payload);
    //     state.blog = action.payload;
    //   },
    //   prepare: (blog) => {
    //     return { payload: { blog } };
    //   },
    // },
    // selectedBlog: {
    //   reducer: (state: any, action: any) => {
    //     state.selectedBlogDetails = action.payload;
    //   },
    //   prepare: (selectedBlog) => {
    //     return { payload: selectedBlog };
    //   },
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchBlogs.fulfilled,
      (state, action: PayloadAction<any>) => {
        console.log("payload: ", action.payload);
        state.blogs = action.payload;
        state.loading = "succeeded";
      }
    );
  },
});

// export const { addBlog, selectedBlog } = blogsSlice.actions;
export default blogsSlice.reducer;
