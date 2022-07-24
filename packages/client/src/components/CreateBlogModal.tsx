import React from "react";
import { Grid, TextField, Button } from "@mui/material";

export const CreateBlogModal = ({ selectedRow }: any) => {
  return (
    <form>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ px: 2, py: 2 }}
      >
        <Grid item lg={6} xs={12}>
          <TextField
            fullWidth
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />
        </Grid>
        <Grid item lg={6} xs={12}>
          <TextField
            fullWidth
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />
        </Grid>
        <Button variant="contained" sx={{ px: 2.5, py: 1.5, my: 4 }}>
          Create
        </Button>
      </Grid>
    </form>
  );
};
