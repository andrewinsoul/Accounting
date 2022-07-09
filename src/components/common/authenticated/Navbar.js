import React, { useState, useEffect } from "react";
import { AiFillBell } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { Text } from "../Text";
import { Divider } from "@mui/material";

const avatar = require("../../../images/avatar.png");
const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

export const Nav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [, setWindowSize] = useState(getWindowSize());
  const [isMobile, setIsMobile] = useState(null);
  const [showBusinessMobile, setShowBusinessMobile] = useState(false);
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const displayMyBusiness = () => {
    if (isMobile) {
      setShowBusinessMobile(!showBusinessMobile);
    }
  };

  return (
    <div className="pl-18">
      <nav className=" bg-white py-1">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between md:block">
            <div className="flex justify-between items-center">
              <div className="hidden md:block pl-16">
                <div className="flex justify-between w-full flex-row items-center">
                  <Text
                    className="font-extrabold px-3 py-2 rounded-md text-lg"
                    color="text-gray-700"
                  >
                    Dashboard
                  </Text>
                </div>
              </div>
              <div className="flex flex-row relative">
                <button className="mr-4 border-gray-200 w-10 flex justify-center rounded-md h-8 items-center border-2">
                  <AiFillBell color="grey" size={20} />
                </button>
                <img
                  className={`h-8 w-8 rounded-full ${
                    isMobile ? "cursor-pointer" : ""
                  }`}
                  src={avatar}
                  onClick={displayMyBusiness}
                  alt="my avatar"
                />
                {showBusinessMobile && isMobile ? (
                  <div className="absolute rounded-md top-10 left-10 elevation-4 w-vl bg-white">
                    <Text className="text-sm ml-3">Business Name 2</Text>
                    <Text className="my-2 text-sm ml-3">Business Name 1</Text>
                    <Text className="text-sm ml-3">Business Name 3</Text>
                    <Divider className="my-4" />
                    <Text className="my-4 text-sm ml-3" color="text-red-500">
                      Add a business
                    </Text>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div className="text-gray-500 cursor-pointer hover:text-white  hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                  My Profile
                </div>

                <div className="text-gray-500 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Invoice
                </div>

                <div className="text-gray-500 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Management
                </div>

                <div className="text-gray-500 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Security
                </div>

                <div className="text-gray-500 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Support
                </div>
                <div
                  onClick={() => {
                    localStorage.clear();
                    navigate("/login");
                  }}
                  className="text-gray-500 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Log Out
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};
