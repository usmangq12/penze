import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  comment: {},
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: {
      reducer: (state: any, action: any) => {
        state.comment = action.payload;
      },
      prepare: (comment) => {
        return { payload: { comment } };
      },
    },
  },
});

export default commentsSlice.reducer;
