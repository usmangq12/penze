import React, { useState, useEffect } from "react";
import { Pagination as MuiPagination } from "@mui/material";
import Stack from "@mui/material/Stack";

// interface IBlog {
//   title: string;
//   date: string;
//   content: string;
// }

interface IBlogsProps {
  config: { noOfPages: number; page: number };
  onChange: any;
}

export const Pagination = ({ config, onChange }: IBlogsProps) => {
  return (
    <>
      <Stack spacing={2}>
        <MuiPagination
          count={config.noOfPages}
          page={config.page}
          onChange={onChange}
          defaultPage={1}
          // color="#29343B"
          size="large"
          showFirstButton
          showLastButton
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white",
              backgroundColor: "#84a0b2 !important",
            },

            "& .Mui-selected": {
              backgroundColor: "#29343B !important",
            },
          }}
        />
      </Stack>
    </>
  );
};
