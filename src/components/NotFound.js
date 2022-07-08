import React from "react";
import { Link } from "react-router-dom";
const saveImg = require("../images/save.png");

export const NotFoundPage = () => (
  <div className="flex justify-center items-center h-full flex-col">
    <h1 className="text-5xl mb-6">Prospa</h1>
    <img src={saveImg} alt="oops" className="w-96 h-56" />
    <p>Seems you are lost</p>
    <Link
      to="/get-started"
      className="flex justify-center bg-red-500 rounded-md p-4 w-8/12 lg:w-1/3"
    >
      <button className="text-white text-center">Help me find my way</button>
    </Link>
  </div>
);
