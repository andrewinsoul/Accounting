import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Nav } from "../common/authenticated/Navbar";

export const AuthenticatedRoute = (props) => {
  if (!props.authenticated) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
