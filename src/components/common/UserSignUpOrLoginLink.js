import React from "react";
import { Link } from "react-router-dom";
import { Text } from "./Text";

export const LinkToJoinOrLogin = ({ path, text1, text2 }) => (
  <Link className="lg:absolute right-24 top-12" to={`/${path}`}>
    <Text className="lg:mt-0 mt-4 text-end mr-6">
      {text1}, <span className="text-red-400">{text2}</span>
    </Text>
  </Link>
);
