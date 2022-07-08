import React from "react";
const saveImg = require("../../images/save.png");
const coinImg = require("../../images/coin.png");
export const Sidebar = (props) => (
  <div
    className={`bg-blue-800 fixed top-0 bottom-0 left-0 w-3/12 ${props.classStyles}`}
  >
    <div className="mx-3 text-white flex flex-col">
      <h3 className="text-lg py-4 tracking-wide font-bold">
        {props.header || "prospa"}
      </h3>
      <h2 className="text-xl font-bold mt-4">
        <p className="mb-4">Create multiple{<br />}sub-account</p>
        <small>
          Create multiple subaccounts and do transactions seamlessly
        </small>
      </h2>
      <div className="item-end absolute bottom-8">
        <img
          src={coinImg}
          alt="coins"
          className="w-10 h-10 absolute left-40 bottom-60"
        />
        <img
          src={coinImg}
          alt="coins"
          className="w-10 h-10 left-28 absolute bottom-52"
        />
        <img src={saveImg} alt="save" className="w-72 h-44" />
        <img
          src={coinImg}
          alt="coins"
          className="w-10 h-10 absolute bottom-7 left-16"
        />
        <img src={coinImg} alt="coins" className="w-10 h-10" />
      </div>
      <p className="absolute bottom-3 text-sm text-white">
        &copy; 2020 Prospa Inc
      </p>
    </div>
  </div>
);
