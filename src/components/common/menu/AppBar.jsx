import * as React from "react";
import { styled } from "@mui/material/styles";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


const drawerWidth = 240;

const AppBarConst = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function AppBar(props) {
  return (
    <AppBarConst position='absolute' open={props.open}>
      <Toolbar
        sx={{
          pr: "24px",
        }}>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={props.toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(props.open && { display: "none" }),
          }}>
          <MenuOpenIcon />
        </IconButton>

        <Typography
          component='h1'
          variant='h6'
          color='inherit'
          noWrap
          sx={{ flexGrow: 1 }}>
          RelMng Jenkins Dashboard
        </Typography>
      </Toolbar>
    </AppBarConst>
  );
}
