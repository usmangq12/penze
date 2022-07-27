import { Card as MuiCard } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { LinkStlyed } from "./LinkStyled";
import { IBlogProps } from "../types";

export const Card = ({ blog, onClick }: IBlogProps) => {
  console.log("card blog", blog);
  const { title, date, description } = blog;
  return (
    <LinkStlyed to="/details" state={blog} onClick={() => onClick(blog)}>
      <MuiCard>
        <CardContent>
          <Typography
            sx={{ margin: 0 }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title.slice(0, 25)}...
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            {date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.slice(0, 100)}...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Read More</Button>
        </CardActions>
      </MuiCard>
    </LinkStlyed>
  );
};
