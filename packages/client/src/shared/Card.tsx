import { Card as MuiCard, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink as RouterNavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const LinkStlyed = styled(RouterNavLink)(({ theme }) => ({
  textDecoration: "none",
}));

interface ICard {
  title: string;
  date: string;
  content: string;
}

export const Card = (props: ICard) => {
  const { title, date, content } = props;
  return (
    <LinkStlyed to="/details" state={props}>
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
