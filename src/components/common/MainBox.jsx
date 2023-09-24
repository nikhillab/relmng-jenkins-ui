import React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

export default function MainBox(props) {
  return (
    <React.Fragment>
      <Box
        component='main'
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}>
        <Toolbar />
        <Grid sx={{ mt: 4, mr: 4, ml: 4 }}>{props.children}</Grid>
      </Box>
    </React.Fragment>
  );
}

MainBox.propTypes = {
  children: PropTypes.node,
};
