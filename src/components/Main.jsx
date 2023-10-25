import * as React from "react";
import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppBar from "./common/menu/AppBar";
import Drawer from "./common/menu/Drawer";
import Copyright from "./common/utils/Copyright";
import Dashboard from "./Dashboard";
import Environment from "./environment/Environment";
import Server from "./server/Server";
import Job from "./job/Job";
import JobDetails from "./job/JobDetails";

import Filter from "./filter/Filter";

export default function Main() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar open={open} toggleDrawer={toggleDrawer} />
        <Drawer open={open} toggleDrawer={toggleDrawer} />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/environment' element={<Environment />} />
          <Route path='/server' element={<Server />} />
          <Route path='/job' element={<Job />} />
          <Route path='/filter' element={<Filter />} />
          <Route path='/job/details/:jobId' element={<JobDetails />} />
        </Routes>
      </Box>
      <Copyright sx={{ pt: 4 }} />
    </React.Fragment>
  );
}
