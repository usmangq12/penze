import { Grid } from "@mui/material";
import { memo } from "react";
import { Card } from "../shared";
import { IBlog } from "../types/";

export const MemoizedBlogs = ({ blogs }: any) => {
  return (
    <Grid container item sx={{ mt: 10 }}>
      {blogs.map((blog: IBlog) => (
        <Grid
          // key={`blog-id${i}`}
          container
          item
          direction={"row"}
          sx={{ p: 2 }}
          xs={12}
          sm={6}
          md={3}
        >
          <Card blog={blog} />
        </Grid>
      ))}
    </Grid>
  );
};

export const Blogs = memo(MemoizedBlogs);
