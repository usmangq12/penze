import { Button, Grid, Typography } from "@mui/material";
import { Error } from "../assets/images";
import React from "react";
import { StyledButton } from "../shared/StyledButton";

export const ErrorMessage = () => {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid>
        <img src={Error} alt="error" width="600px" height="300px" />
      </Grid>
      <Grid>
        <Typography sx={{ fontSize: "20px", fontWeight: "700", mb: "20px" }}>
          You didn't break the internet, but we can't find what you are looking
          for.
        </Typography>
      </Grid>
      <Grid>
        <Button
          sx={{
            p: "8px 16px",
            background: "black",
            color: "#fff",
            fontSize: "20px",
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: "black !important",
            },
          }}
          variant="contained"
        >
          Go Back
        </Button>
      </Grid>
    </Grid>
  );
};
