import React from "react";
import { Grid, TextField, Button, FormGroup } from "@mui/material";

export const CreateBlogModal = ({ selectedRow }: any) => {
  return (
    <Grid component="form">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        // flexDirection="coli"
        spacing={2}
        sx={{ px: 2, py: 2 }}
      >
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />
        </Grid>
        <Grid container justifyContent="center">
          <Button
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
