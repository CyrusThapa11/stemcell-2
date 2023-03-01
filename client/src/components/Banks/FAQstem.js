import React from "react";
import Accordian from "./Accordian";

const FAQstem = () => {
  return (
    <div className="bg-amber-50 flex-wrap transition-all ease-in flex  px-5 lg:px-16 justify-center py-6 mt-7 ">
      <div className="p-5  font-serif flex flex-col items-start justify-center ">
        <h1 className="text-4xl font-medium ">
          Frequently
          <br />
          <span>Asked Questions</span>{" "}
        </h1>
        <span className="text-2xl mt-5 font-thin"> Wish To Know More?</span>
      </div>
      <div className="p-5">
        <Accordian />
      </div>
    </div>
  );
};

export default FAQstem;
