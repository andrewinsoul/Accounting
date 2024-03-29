import React, { useState } from "react";
import Icon from "@mui/material/Icon";
import { LinkToJoinOrLogin } from "./common/UserSignUpOrLoginLink";
import { Text } from "./common/Text";
import { Link } from "react-router-dom";

const featureArray = [
  {
    focus: false,
    title: "Title 1",
    benefits: ["You can do this1", "You can do that1", "You can do this too1"],
  },
  {
    focus: false,
    title: "Title 2",
    benefits: ["You can do this2", "You can do that2", "You can do this too2"],
  },
  {
    focus: false,
    title: "Title 3",
    benefits: ["You can do this3", "You can do that3", "You can do this too3"],
  },
];
export const GetStarted = () => {
  const [featureIndexClickStatus, setFeatureIndexClickStatus] =
    useState(featureArray);
  const handleClick = (index) => () => {
    const featureIndexClickStatus_ = featureIndexClickStatus.map(
      (item, itemIndex) => {
        if (index === itemIndex) {
          return {
            ...item,
            focus: true,
          };
        } else {
          return {
            ...item,
            focus: false,
          };
        }
      }
    );
    setFeatureIndexClickStatus(featureIndexClickStatus_);
  };

  return (
    <>
      <LinkToJoinOrLogin
        path="login"
        text1="Already a member"
        text2="Sign in"
      />
      <div className="flex justify-center flex-col items-center h-screen mt-8">
        <Text className="text-lg font-bold text-gray-900">
          Open a new business account
        </Text>
        <Text className="lg:self-start text-xs mb-4 ml-0 lg:ml-80 my-2">
          Types of Accounts and the benefits to each
        </Text>
        {featureIndexClickStatus.map((item, index) => (
          <div
            onClick={handleClick(index)}
            key={index}
            className={`border-2 ${
              index === 1 ? "my-3" : ""
            } w-10/12 lg:mx-0 lg:w-5/12 ${
              item.focus ? "border-red-400" : "border-gray-400 shadow-md"
            } rounded-md p-4 cursor-pointer`}
          >
            <div className="flex flex-row items-center">
              {item.focus ? (
                <div className="bg-red-400 w-4 h-4 mr-2 rounded-lg" />
              ) : null}
              <h4 className="font-bold text-gray-700">{item.title}</h4>
            </div>
            <div className={`${item.focus ? "block" : "hidden"}`}>
              <Text className="my-2 text-xs">
                As a registered business owner, you will get:
              </Text>
              {item.benefits.map((benefit, index_) => (
                <div className="flex flex-row pb-4" key={`benefit-${index_}`}>
                  <Icon className="mr-2" color="success">
                    check_circle_outline
                  </Icon>
                  <Text className="text-sm">{benefit}</Text>
                </div>
              ))}
            </div>
          </div>
        ))}
        <Link
          to="/register"
          className="w-10/12 mb-8 lg:mb-0 lg:w-5/12 mt-8 bg-red-400 p-3 rounded-md flex justify-center"
        >
          <Text color="text-white" className="font-bold">
            Next
          </Text>
        </Link>
      </div>
    </>
  );
};
