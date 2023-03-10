/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import "./Home.css";
const CreateFund = () => {
  const [DisableCreation, setDisableCreation] = useState(1);

  return (
    <div className="fund h-[100vh] pt-32 px-48  mb-14">
      <div className="flex justify-around ">
        <div className="flex flex-col gap-3 w-[30vw] bg-white bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg p-10 ">
          <div class="mb-2">
            <label
              for="large-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Large input
            </label>
            <input
              type="text"
              id="large-input"
              class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col w-[30vw] bg-white bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg p-10 ">
          <div className="flex flex-col gap-3">
            <div class="mb-2">
              <label
                for="large-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Large input
              </label>
              <input
                type="text"
                id="large-input"
                class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="mb-2">
              <label
                for="large-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Large input
              </label>
              <input
                type="text"
                id="large-input"
                class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div class="my-2">
            <input type="file" />
          </div>
          <div classname="flex">
            <div className="inline-block">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span class="relative px-5 py-2.5 transition-all ease-in-out duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Green to blue
                </span>
              </button>
            </div>
            <div className="inline-block">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in-out duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Purple to blue
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFund;
