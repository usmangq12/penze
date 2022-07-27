import { Grid } from "@mui/material";
import { memo } from "react";
import { Card } from "../shared";
import { IBlog } from "../types/";

export const MemoizedBlogs = ({ blogs }: any) => {
  // dispatch action on onClick
  console.log({ blogs });
  const onClick = (blog: any) => {
    // dispatch(selectedBlog(blog));
  };
  return (
    <Grid container item sx={{ mt: 20 }}>
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
          <Card blog={blog} onClick={(blog: any) => onClick(blog)} />
        </Grid>
      ))}
    </Grid>
  );
};

export const Blogs = memo(MemoizedBlogs);
