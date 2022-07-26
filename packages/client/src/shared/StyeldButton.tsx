import React from "react";
import { Button } from "@mui/material";

export const StyeldButton = ({ text, handelClick, children, ...rest }: any) => {
  return (
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
      onClick={handelClick}
      {...rest}
    >
      {children}
    </Button>
  );
};
