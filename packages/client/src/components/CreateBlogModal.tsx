import React, { useState } from "react";
import { Grid, TextField, Button, FormGroup } from "@mui/material";
import { StyeldButton } from "../shared/StyeldButton";
export const CreateBlogModal = ({ selectedRow }: any) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <Grid>
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
            placeholder="Tittle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Grid>
        <Grid container justifyContent="center">
          <StyeldButton>Create</StyeldButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
