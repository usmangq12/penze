import { useLocation } from "react-router-dom";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Avatar,
  CardActions,
  ListItemAvatar,
} from "@mui/material";
import { TextField } from "../shared/TextField";
import { TextArea } from "../shared/TextArea";
// import { Button } from "../shared/Button";
import { useState } from "react";
import { Comment } from "../types";
export const Details = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comment, setComments] = useState<Comment[]>([]);
  const [openInput, setInput] = useState<boolean>(true);

  const addComments = () => {
    const blogComment: Comment = {
      name: "",
      message: "",
    };
    setComments([...comment, blogComment]);
  };
  const showInput = () => {
    setInput(!openInput);
  };
  return (
    <Grid
      container
      sx={{ pt: 10, pl: { xs: 3, sm: 6 }, pr: { xs: 3, sm: 6 }, pb: 2 }}
    >
      <Grid>
        <Typography
          variant="h3"
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "700",

            mt: 2,
          }}
        >
          Detail Page
        </Typography>
        <Grid
          mt={2}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              borderLeft: "3px inset #fff",
              fontSize: "40px",
              fontWeight: "750",
            }}
          >
            Lorem Ipsum
          </Typography>
        </Grid>

        <Grid
          xs={12}
          sm={9}
          md={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "left" },
            textAlign: { xs: "center", sm: "left" },
            mt: 2,
          }}
        >
          <Typography variant="body1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sm={9}
          md={6}
          mt={4}
          sx={{ diplay: "flex", justifyContent: { xs: "center", sm: "left" } }}
        >
          <Card sx={{ borderRadius: "2px !important" }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: "700" }}
              >
                Add a Comment
              </Typography>
              <Grid
                gap={4}
                sx={{ display: "flex", flexDirection: "column", pt: 3.5 }}
              >
                <TextField />
                <TextArea />
              </Grid>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#29343B",
                  ml: 1,
                  px: 2.5,
                  py: 1.5,
                  fontWeight: "500",
                  "&:hover": {
                    backgroundColor: "#29343B !important",
                  },
                }}
                onClick={addComments}
              >
                Submit
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} sm={9} md={5.5} mt={4} ml={2}>
          <Card>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ListItemAvatar sx={{ p: 2 }}>
                <Avatar alt="Remy Sharp" src="" />
              </ListItemAvatar>
              <Grid pt={3}>
                <Typography
                  sx={{
                    color: "#1976d2",
                    fontSize: "18px",
                    fontWeight: "600",
                    ml: 0.5,
                  }}
                  variant="h6"
                >
                  DDD
                </Typography>
                <Grid sx={{ display: "flex" }}>
                  <Typography sx={{ fontSize: "14px" }}>2/4/2022</Typography>
                  <Typography sx={{ fontSize: "14px", mx: 1 }}>AT</Typography>

                  <Typography sx={{ fontSize: "14px" }}>6:58 PM`</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Typography sx={{ mt: 1, pl: 2, pr: 2 }} paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low,
            </Typography>
            <CardActions>
              <Button
                variant="text"
                sx={{
                  ml: 1,
                  fontWeight: "500",
                }}
                onClick={showInput}
              >
                reply
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {!openInput ? (
          <Grid ml={6} xs={12} sm={9} md={5.2} mt={4}>
            <Grid gap={4} sx={{ display: "flex", flexDirection: "column" }}>
              <TextField />
              <TextArea />
            </Grid>
            <Grid>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#29343B",
                  ml: 1,
                  mt: 2,
                  px: 2.5,
                  py: 1.5,
                  fontWeight: "500",
                  "&:hover": {
                    backgroundColor: "#29343B !important",
                  },
                }}
                onClick={addComments}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
        <Grid xs={12} sm={9} md={5.2} mt={2} ml={6}>
          <Card sx={{ backgroundColor: "	#f0f6ff" }}>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ListItemAvatar sx={{ p: 2 }}>
                <Avatar alt="Remy Sharp" src="" />
              </ListItemAvatar>
              <Grid pt={3}>
                <Typography
                  sx={{
                    color: "#1976d2",
                    fontSize: "18px",
                    fontWeight: "600",
                    ml: 0.5,
                  }}
                  variant="h6"
                >
                  DDD
                </Typography>
                <Grid sx={{ display: "flex" }}>
                  <Grid sx={{ display: "flex" }}>
                    <Typography sx={{ fontSize: "14px" }}>2/4/2022</Typography>
                    <Typography sx={{ fontSize: "14px", mx: 1 }}>AT</Typography>

                    <Typography sx={{ fontSize: "14px" }}>6:58 PM`</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Typography sx={{ mt: 1, pl: 2, pr: 2 }} paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low,
            </Typography>
            <CardActions>
              <Button
                variant="text"
                sx={{
                  ml: 1,
                  fontWeight: "500",
                }}
              >
                reply
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
