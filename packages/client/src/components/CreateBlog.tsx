import { useState, SyntheticEvent } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { addBlog } from "../store/BlogsSlice";

export const CreateBlog = ({ closeDrawer }: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    console.log("handleSubmit called");
    event.preventDefault();
    dispatch(addBlog({ title, description }));
    closeDrawer(true);
  };

  return (
    <Grid component="form" onSubmit={handleSubmit}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        spacing={2}
        sx={{ px: 2, py: 2 }}
      >
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="titleId"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="descriptionId"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="filled"
          />
        </Grid>
        <Grid container justifyContent="center">
          <Button
            type="submit"
            variant="contained"
            sx={{
              px: 2.5,
              py: 1.5,
              my: 4,
              background: "#29343B ",
              "&:hover": {
                backgroundColor: "#29343B !important",
              },
            }}
          >
            Create
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
