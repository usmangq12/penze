import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { NavLink as RouterNavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
const LinkStlyed = styled(RouterNavLink)(({ theme }) => ({
  textDecoration: "none",
}));

export function Navbar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MuiAppBar position="fixed" sx={{ background: "#29343B " }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2 }}
          ></IconButton>
          <LinkStlyed to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontSize: "30px",
                fontWeight: "700",
                color: "#fff",
                ml: "24",
              }}
            >
              Penze
            </Typography>
          </LinkStlyed>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}
