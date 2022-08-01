import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getAllBlogs,
  createBlog,
  getBlogById,
} from "../services/ResquestService";
import { IBlog, IBlogDetails } from "../types";

export const fetchBlogs = createAsyncThunk("blogs", async () => {
  const response = await getAllBlogs();
  return response.data;
});

interface IBlogsState {
  blogs: IBlog[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
}

const blogsInitialState = {
  blogs: [],
  loading: "idle",
  error: null,
} as unknown as IBlogsState;

export const blogsSlice = createSlice({
  name: "blogs",
  initialState: blogsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(
        fetchBlogs.fulfilled,
        (state, action: PayloadAction<IBlog[]>) => {
          console.log("payload: ", action.payload);
          if (state.loading === "pending" && action.payload) {
            state.loading = "idle";
            state.blogs = action.payload;
          }
        }
      )
      .addCase(fetchBlogs.rejected, (state, action: any) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.error = action.error;
        }
      });
  },
});

export const addBlog = createAsyncThunk(
  "addBlog",
  async (data: { title: string; description: string }) => {
    console.log({ data });
    const response = await createBlog(data);
    return response.data;
  }
);

interface IBlogState {
  blog: IBlog;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
}

const createBlogInitialState = {
  blog: { _id: "", title: "", description: "" },
  loading: "idle",
  error: null,
} as unknown as IBlogState;

export const createBlogSlice = createSlice({
  name: "createBlog",
  initialState: createBlogInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBlog.pending, (state) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(addBlog.fulfilled, (state, action: PayloadAction<any>) => {
        if (state.loading === "pending") {
          state.blog = action.payload;
          state.loading = "idle";
        }
      })
      .addCase(addBlog.rejected, (state, action: any) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.error = action.error;
        }
      });
  },
});

export const fetchBlogById = createAsyncThunk(
  "getBlogDetails",
  async (id: string) => {
    console.log({ idd: id });
    const response = await getBlogById(id);
    return response.data;
  }
);

interface IBlogDetailsState {
  blogDetail: IBlogDetails;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: unknown;
}

const getBlogDetailsInitialState = {
  blogDetail: {},
  loading: "idle",
  error: null,
} as unknown as IBlogDetailsState;

export const blogDetiailsSlice = createSlice({
  name: "getBlog",
  initialState: getBlogDetailsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogById.pending, (state) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.blogDetail = action.payload;
        }
      })
      .addCase(fetchBlogById.rejected, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.error = action.error;
        }
      });
  },
});
