import React from "react";
import {
  AiOutlineBank,
  AiOutlineCreditCard,
  AiOutlineInteraction,
  AiOutlineTrademark,
  AiOutlineTransaction,
} from "react-icons/ai";
import { Chart as ChartJS } from "chart.js";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Nav } from "../common/authenticated/Navbar";
import { Text } from "../common/Text";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);
const cashOutFlowData = [
  {
    category: "Bank Fees",
    icon: <AiOutlineBank color="#fff" />,
    amount: "N250,000",
    bgColor: "bg-red-500",
  },
  {
    category: "Internet",
    icon: <AiOutlineInteraction color="#fff" />,
    amount: "N100,000",
    bgColor: "bg-green-400",
  },
  {
    category: "Marketing",
    icon: <AiOutlineTrademark color="#fff" />,
    amount: "N300,000",
    bgColor: "bg-purple-600",
  },
  {
    category: "Transfer",
    icon: <AiOutlineTransaction color="#fff" />,
    amount: "N500,000",
    bgColor: "bg-green-600",
  },
];

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },

    y: {
      grid: {
        color: "rgba(217,43,7,0.1)",
      },
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"];
const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [233, 334, 255, 166, 278, 889, 997],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      fill: { above: "rgba(255, 99, 32, 0.5)", target: "origin" },
    },
  ],
};

export const Dashboard = () => (
  <>
    <Nav />
    <div className="bg-gray-100 min-h-screen px-4 md:px-28 pt-6">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <Text className="font-extrabold text-xl">Welcome back, Nature</Text>
          <div className="flex flex-row">
            <Text>Here is what have been happening in the last</Text>
            <Text className="underline ml-1" color="text-red-500">
              7 days
            </Text>
          </div>
        </div>
        <button className="bg-red-500 rounded-md p-2">
          <Text color="text-white">Add a sub account</Text>
        </button>
      </div>
      <div className="flex flex-col md:flex-row my-6">
        <div className="w-full md:w-3/6 elevation-3 relative rounded-md md:ml-4 bg-white h-40 md:mr-0 mr-4">
          <div className="flex flex-row justify-between mx-2 mt-3">
            <div>
              <Text className="font-bold text-gray-600">CURRENT ACCOUNT</Text>
              <Text className="" color="text-gray-400">
                Providus Bank - 483838484937
              </Text>
            </div>
            <p className="bg-blue-200 w-8 h-8 rounded-full flex justify-center items-center">
              <AiOutlineCreditCard color="#6f00f8" size={19} />
            </p>
          </div>
          <div className="flex flex-row absolute bottom-3 left-3 items-end">
            <Text className="text-4xl">N814,800</Text>
            <Text>.78</Text>
          </div>
        </div>
        <div className="w-full md:w-3/6 elevation-3 relative rounded-md md:ml-4 bg-white h-40 md:mt-0 mt-6">
          <div className="flex flex-row justify-between mx-2 mt-3">
            <div>
              <Text className="font-bold text-gray-600">CURRENT ACCOUNT</Text>
              <Text className="" color="text-gray-400">
                Sub Account - 12345678997
              </Text>
            </div>
            <p className="bg-green-100 w-8 h-8 rounded-full flex justify-center items-center">
              <AiOutlineCreditCard color="#1cd7ff" size={19} />
            </p>
          </div>
          <div className="flex flex-row absolute bottom-3 left-3 items-end">
            <Text className="text-4xl">N39,342</Text>
            <Text>.45</Text>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row my-4">
        <div className="md:w-4/6 w-full elevation-3 relative rounded-md ml-0 md:ml-4 bg-white h-72">
          <Text className="font-bold text-gray-600 mt-6 mx-2">
            June Summary
          </Text>
          <div className="flex flex-row justify-evenly mx-2 mt-4">
            <div>
              <Text color="text-gray-400">Money in:</Text>
              <Text className="text-lg font-bold">N2,000,000</Text>
            </div>
            <div className="mx-10">
              <Text color="text-gray-400">Money out:</Text>
              <Text className="text-lg font-bold">N2,000,000</Text>
            </div>
            <div>
              <Text color="text-gray-400">Differece:</Text>
              <Text className="text-lg font-bold">N2,000,000</Text>
            </div>
          </div>
          <div className="flex flex-row absolute bottom-3 left-3 items-end w-11/12 ">
            <Line
              options={{
                ...options,
                responsive: true,
                tension: 0.3,
                maintainAspectRatio: false,
              }}
              data={data}
            />
          </div>
        </div>
        <div className="w-full md:w-3/6 elevation-3 relative rounded-md ml-0 md:ml-4 bg-white h-72 md:mt-0 mt-6">
          <Text className="my-6 font-bold text-gray-600 mt-6 mx-2">
            Cash outflow
          </Text>
          {cashOutFlowData.map((item) => (
            <div className="flex flex-row justify-between my-6 mx-2 items-center">
              <div className="flex flex-row">
                <div
                  className={`rounded-md justify-center items-center ${item.bgColor} w-8 h-6 flex mr-2`}
                >
                  {item.icon}
                </div>
                <Text className="text-sm">{item.category}</Text>
              </div>
              <div className="relative w-7/12">
                <Text className="text-sm" color="text-gray-400">
                  {item.amount}
                </Text>
                <div className="bg-gray-300 rounded-md w-full h-1"></div>
                <div className="bg-yellow-400 h-1 rounded-md w-2/5 absolute bottom-0"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);
