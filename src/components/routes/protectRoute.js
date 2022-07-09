import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const AuthenticatedRoute = (props) => {
  if (!props.authenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
