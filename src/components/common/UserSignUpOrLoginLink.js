import React from "react";
import { Link } from "react-router-dom";

export const LinkToJoinOrLogin = () => (
  <Link className="absolute right-24 top-12" to="/">
    Already A Member, <span className="text-red-400">Sign In</span>
  </Link>
);
