import { Grid } from "@mui/material";
import { Card } from "../shared";

interface IBlog {
  title: string;
  date: string;
  content: string;
}

interface IBlogsProps {
  blogs: IBlog[];
}

export const Blogs = ({ blogs }: IBlogsProps) => {
  return (
    <Grid container item sx={{ mt: 20 }}>
      {blogs.map((blog: IBlog) => (
        <Grid
          container
          item
          direction={"row"}
          sx={{ p: 2 }}
          xs={12}
          sm={6}
          md={3}
        >
          <Card title={blog.title} date={blog.date} content={blog.content} />
        </Grid>
      ))}
    </Grid>
  );
};
