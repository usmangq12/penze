import { NavLink as RouterNavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

export const LinkStlyed = styled(RouterNavLink)(({ theme }) => ({
  textDecoration: "none",
}));
