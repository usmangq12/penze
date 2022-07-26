import { Grid } from "@mui/material";
import { Card } from "../shared";
import { IBlog } from "../Models/Blogs";
import { selectedBlog } from "../store/BlogsSlice";
import { useAppDispatch } from "../store/hooks";

export const Blogs = ({ blogs }: any) => {
  const dispatch = useAppDispatch();
  // dispatch action on onClick
  const onClick = (blog: any) => {
    dispatch(selectedBlog(blog));
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
