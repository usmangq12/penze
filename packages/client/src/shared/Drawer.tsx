import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import CancelIcon from "@mui/icons-material/Cancel";
import { Drawer as MuiDrawer, Grid, Typography } from "@mui/material";

const drawerWidth = 720;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

interface IPersistentDrawerRight {
  title: string;
  openDrawer: boolean;
  closeDrawer: Function;
  DrawerComponent: Function;
}

export const Drawer = (props: IPersistentDrawerRight) => {
  const { title, openDrawer, closeDrawer, DrawerComponent } = props;

  return (
    <Grid container item>
      <CssBaseline />

      <MuiDrawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            maxWidth: drawerWidth,
            width: "100%",
          },
        }}
        variant="persistent"
        anchor="right"
        open={openDrawer}
      >
        <DrawerHeader
          sx={{ background: "#29343B ", minHeight: "50px !important" }}
        >
          <Grid
            container
            item
            justifyContent="flex-start"
            sx={{ pl: 2, pr: 2 }}
          >
            <Typography
              variant="h6"
              noWrap
              sx={{ flexGrow: 1 }}
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                color: "white",
              }}
            >
              {title}
            </Typography>
            <Grid item justifyContent="center" alignItems="end">
              <CancelIcon
                onClick={() => closeDrawer()}
                sx={{
                  fontSize: 26,
                  right: 20,
                  cursor: "pointer",
                  color: "white",
                }}
              ></CancelIcon>
            </Grid>
          </Grid>
        </DrawerHeader>
        <Divider />
        {openDrawer ? <DrawerComponent closeDrawer={closeDrawer} /> : null}
      </MuiDrawer>
    </Grid>
  );
};
