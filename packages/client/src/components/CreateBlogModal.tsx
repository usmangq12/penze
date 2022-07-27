import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  FormGroup,
  TextareaAutosize,
} from "@mui/material";
import { StyledButton } from "../shared/StyledButton";
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
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            placeholder="Tittle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="filled"
          />
        </Grid>
        <Grid item xs={12}>
          {/* <TextField
            fullWidth
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          /> */}
          <TextareaAutosize
            // cols={30}
            minRows={5}
            placeholder="Blog"
            style={{
              borderRadius: "4px",
              fontSize: "16px",
              resize: "none",
              padding: "16px",
              width: "100%",
            }}
          />
        </Grid>
        <Grid container justifyContent="center">
          <StyledButton>Create</StyledButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
