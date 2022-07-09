import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "../common/Sidebar";
import { AuthenticatedSidebar } from "../common/authenticated/Sidebar";
import { GetStarted } from "../GetStarted";
import { Signup } from "../Signup";
import { Signin } from "../Signin";
import { NotFoundPage } from "../NotFound";
import { AuthenticatedRoute } from "./protectRoute";
import { Dashboard } from "../authenticated/Dashboard";

const unAuthenticatedSidebar = ["/get-started", "/login", "/register"];
const authenticatedSidebar = ["/dashboard"];
let authenticated;

export const Paths = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      authenticated = true;
      navigate("/dashboard");
    } else {
      authenticated = false;
    }
  }, []);
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="lg:h-screen md:flex">
      <div className="md:w-1/4 lg:w-1/5">
        {unAuthenticatedSidebar.includes(pathname) ? (
          <Sidebar
            className={`${
              pathname === "/login" ? "bg-purple-300" : "bg-blue-800"
            }`}
          />
        ) : authenticatedSidebar.includes(pathname) ? (
          <AuthenticatedSidebar />
        ) : null}
      </div>
      <div className="w-full md:h-screen md:w-3/4 lg:w-4/5">
        <Routes>
          <Route index element={<Signin />} />
          <Route exact path="/get-started" element={<GetStarted />} />
          <Route exact path="/register" element={<Signup />} />
          <Route exact path="/login" element={<Signin />} />
          <Route element={<AuthenticatedRoute authenticated={authenticated} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* other authenticated routes go here */}
          </Route>
          <Route exact path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};
