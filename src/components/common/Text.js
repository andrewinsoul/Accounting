import React from "react";

export const Text = (props) => (
  <p className={`${props.color || "text-gray-800"} ${props.className}`}>
    {props.children}
  </p>
);
