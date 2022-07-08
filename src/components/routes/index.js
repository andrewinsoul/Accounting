import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Sidebar } from "../common/Sidebar";
import { GetStarted } from "../GetStarted";
import { Signup } from "../Signup";
import { Signin } from "../Signin";
import { NotFoundPage } from "../NotFound";

const validPaths = ["/get-started", "/login", "/register"];
export const Paths = (props) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="lg:h-screen md:flex">
      <div className="md:w-1/4 lg:w-1/5">
        {validPaths.includes(pathname) ? (
          <Sidebar
            className={`${
              pathname === "/login" ? "bg-purple-300" : "bg-blue-800"
            }`}
          />
        ) : null}
      </div>
      <div className="w-full md:h-screen md:w-3/4 lg:w-4/5">
        <Routes>
          <Route exact path="/get-started" element={<GetStarted />} />
          <Route exact path="/register" element={<Signup />} />
          <Route exact path="/login" element={<Signin />} />
          <Route exact path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};
