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
  console.log({ config });
  return (
    <>
      <Stack spacing={2}>
        <MuiPagination
          count={config.noOfPages}
          page={config.page}
          onChange={onChange}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
        />
      </Stack>
    </>
  );
};
