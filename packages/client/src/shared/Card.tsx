import { Card as MuiCard, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { LinkStlyed } from "./LinkStyled";
import { IBlogProps } from "../Models/Blogs";

export const Card = ({ blog, onClick }: IBlogProps) => {
  const { id, title, date, content } = blog;

  console.log(id);
  return (
    <LinkStlyed
      to={`/Details/${id}`}
      state={blog}
      onClick={() => onClick(blog)}
    >
      <MuiCard>
        <CardContent>
          <Typography
            sx={{ margin: 0 }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            {date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content.slice(0, 100)}...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Read More</Button>
        </CardActions>
      </MuiCard>
    </LinkStlyed>
  );
};
