/* eslint-disable no-unused-vars */
import React from "react";
import PieChart from "./PieChart";
import { UserRegistrationChart } from "./UserRegistrationChart";
import { VerticalChart } from "./VerticalChart";

const BankDashboard = () => {
  return (
    <div className="my-10 overflow-x-hidden">
      <div className="text-center my-2 ">
        <h1 className="text-4xl font-extrabold font-serif text-violet-500">
          BankDashboard
        </h1>
      </div>
      <div>
        <>
          {/*  */}
          <div className="w-full flex mx-10 py-8 items-center">
            <div className="w-[50vw] mx-2 ">
              <div className="overflow-x-hidden relative  rounded-xl shadow-2xl">
                <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100 shadow-2xl ">
                  <thead className="text-xs text-white uppercase bg-indigo-400 dark:text-white ">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Product name
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Color
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Category
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Price
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-indigo-500 border-b border-blue-400">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td className="py-4 px-6">Sliver</td>
                      <td className="py-4 px-6">Laptop</td>
                      <td className="py-4 px-6">$2999</td>
                      <td className="py-4 px-6">
                        <span className=" cursor-pointer font-medium text-white hover:underline">
                          Edit
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-indigo-400 border-b border-blue-400">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td className="py-4 px-6">White</td>
                      <td className="py-4 px-6">Laptop PC</td>
                      <td className="py-4 px-6">$1999</td>
                      <td className="py-4 px-6">
                        <span className=" cursor-pointer font-medium text-white hover:underline">
                          Edit
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500 border-b border-blue-400">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                      >
                        Magic Mouse 2
                      </th>
                      <td className="py-4 px-6">Black</td>
                      <td className="py-4 px-6">Accessories</td>
                      <td className="py-4 px-6">$99</td>
                      <td className="py-4 px-6">
                        <span className=" cursor-pointer font-medium text-white hover:underline">
                          Edit
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-indigo-400 border-b border-blue-400">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                      >
                        Google Pixel Phone
                      </th>
                      <td className="py-4 px-6">Gray</td>
                      <td className="py-4 px-6">Phone</td>
                      <td className="py-4 px-6">$799</td>
                      <td className="py-4 px-6">
                        <span className=" cursor-pointer font-medium text-white hover:underline">
                          Edit
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-indigo-500 border-blue-40">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                      >
                        Apple Watch 5
                      </th>
                      <td className="py-4 px-6">Red</td>
                      <td className="py-4 px-6">Wearables</td>
                      <td className="py-4 px-6">$999</td>
                      <td className="py-4 px-6">
                        <span className=" cursor-pointer font-medium text-white hover:underline">
                          Edit
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className=" w-[33vw] m-5 ">
              <PieChart />
            </div>
          </div>
          <div className="flex mx-10 justify-center my-10 items-center">
            <div className=" w-[33vw] m-5 ">
              <PieChart />
            </div>
            <div className=" w-[40vw] mx-3 ">
              <VerticalChart />
            </div>
          </div>
          <div className="flex mx-10 justify-center my-10 items-center">
            <div className=" w-[40vw] m-5 ">
              <UserRegistrationChart />
            </div>
            <div className=" w-[33vw] m-5 ">
              <PieChart />
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default BankDashboard;
