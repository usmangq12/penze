import React from "react";
import { Grid, TextareaAutosize } from "@mui/material";

export const TextArea = ({ value, onChange, ...rest }: any) => {
  return (
    <TextareaAutosize
      cols={30}
      minRows={10}
      placeholder="Comment"
      style={{
        borderRadius: "4px",
        fontSize: "16px",
        resize: "none",
        padding: "16px",
      }}
    ></TextareaAutosize>
  );
};
