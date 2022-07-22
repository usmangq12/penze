import { Card as MuiCard } from "@mui/material";
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
    <LinkStlyed to="/Details" state={props}>
      <MuiCard sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Read More</Button>
        </CardActions>
      </MuiCard>
    </LinkStlyed>
  );
};
