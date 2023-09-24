import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

const AuthenticatedRoute = (props) => {
  if (AuthenticationService.isUserLogin()) {
    return <Outlet />;
  } else {
    return <Navigate to='/' />;
  }
};
export default AuthenticatedRoute;
