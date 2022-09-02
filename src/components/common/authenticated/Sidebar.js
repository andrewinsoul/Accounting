import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import {
  AiOutlineDown,
  AiOutlineUser,
  AiOutlineBank,
  AiOutlineUsergroupAdd,
  AiOutlineSecurityScan,
  AiOutlineBug,
  AiOutlineLogout,
} from "react-icons/ai";
import { Text } from "../Text";

const links = [
  {
    label: "My Profile",
    path: "/profile",
    icon: <AiOutlineUser color="gray" size={20} />,
  },
  {
    label: "Invoice",
    path: "/invoice",
    icon: <AiOutlineBank color="gray" size={20} />,
  },
  {
    label: "Management",
    path: "/management",
    icon: <AiOutlineUsergroupAdd color="gray" size={25} />,
  },
  {
    label: "Security",
    path: "/security",
    icon: <AiOutlineSecurityScan color="gray" size={20} />,
  },
  {
    label: "Support",
    path: "/support",
    icon: <AiOutlineBug color="gray" size={20} />,
  },
  {
    label: "Log Out",
    path: "/login",
    icon: <AiOutlineLogout color="#f15d5d" size={20} />,
  },
];

export const AuthenticatedSidebar = (props) => {
  const [showMyBusiness, setShowMyBusiness] = useState();
  const navigate = useNavigate();
  return (
    <div
      className={`elevation-6 hidden lg:block bg-white elev fixed top-0 bottom-0 left-0 w-3/12 z-20 ${props.className}`}
    >
      <div className="flex flex-row mt-4 ">
        <div className="mx-4 w-8 h-8 rounded-full bg-gray-900">
          <Text color="text-white p-1">OD</Text>
        </div>
        <div className="mr-4">
          <p
            className="text-ellipsis overflow-hidden w-48 my-0"
            color="text-gray-500"
          >
            Nature Company
          </p>
          <p className="mt-0 text-xs">Manage account</p>
        </div>
        <button
          onClick={() => setShowMyBusiness(!showMyBusiness)}
          className="bg-gray-100 rounded-md w-9 h-8 flex justify-center items-center"
        >
          <AiOutlineDown size={20} color="rgba(0,0,0, 0.5)" />
        </button>
        {showMyBusiness ? (
          <div className="absolute w-9/12 left-12 elevation-8 top-12 rounded-md bg-white">
            <div className="ml-3">
              <Text className="font-semibold">Nature Company</Text>
              <div className="mt-3">
                <Text className="text-sm">Business Name 2</Text>
                <Text className="my-2 text-sm">Business Name 1</Text>
                <Text className="text-sm">Business Name 3</Text>
                <Divider className="my-4" />
                <Text className="my-4 text-sm" color="text-red-500">
                  Add a business
                </Text>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="mx-4">
        {links.map((item) => (
          <div
            to={item.path}
            onClick={() => {
              if (item.label === "Log Out") {
                localStorage.clear();
                navigate("/login", { replace: true });
              }
            }}
            className="my-8 py-1 rounded-md hover:elevation-8 hover:py-2 cursor-pointer flex flex-row items-center"
            role="button"
          >
            {item.icon}
            <Text
              className="ml-2"
              color={`${item.label === "Log Out" ? " text-red-600" : ""}`}
            >
              {item.label}
            </Text>
          </div>
        ))}
      </div>
      <p className="absolute bottom-3 text-xl text-gray-600 font-bold left-4">
        prospa
      </p>
    </div>
  );
};
