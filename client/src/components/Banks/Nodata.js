/* eslint-disable no-unused-vars */
import React from "react";

const Nodata = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[50vw] ">
      <h2 className="text-5xl text-teal-400 font-bold text-center">
        You have not bought any plans
      </h2>
      <img src="/error1.png" className="w-[60%]" alt="" />
    </div>
  );
};

export default Nodata;
