import { Grid } from "@mui/material";
import React from "react";
import { TextField as MuiTextField } from "@mui/material";

export const TextField = () => {
  return (
    <MuiTextField
      sx={{
        height: "40px",
        borderColor: "#000",
        color: "#fff",
        borderRadius: 2,
      }}
      placeholder="Name"
    />
  );
};
