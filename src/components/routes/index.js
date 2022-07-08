import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Sidebar } from "../common/Sidebar";
import { GetStarted } from "../GetStarted";
export const Paths = (props) => {
  const location = useLocation();
  const { pathname } = location;
  console.log("location >>>>... ", pathname);
  return (
    <div className="lg:h-screen md:flex">
      <div className="md:w-1/4 lg:w-1/5">
        <Sidebar />
      </div>
      <div className="w-full md:h-screen md:w-3/4 lg:w-4/5">
        <Routes>
          <Route exact path="/get-started" element={<GetStarted />} />
        </Routes>
      </div>
    </div>
  );
};
