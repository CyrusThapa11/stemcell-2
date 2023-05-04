/* eslint-disable no-unused-vars */
import React from "react";
import FAQstem from "./FAQstem";
import Plans from "./Plans";
import VideoComponent from "./VideoComponent";

const StemcellPage = () => {
  return (
    <div className="  ">
      <div className="h-[70vh] bg-purple-400 flex px-28 pt-14">
        <div className=" w-[40vw] flex  justify-center flex-col font-semibold">
          <h1 className=" py-2 text-4xl text-zinc-50 font-serif line-height-1 m-2 ">
            Cord Blood Banking
          </h1>
          <h3 className="py-2 text-2xl text-zinc-50 font-mono line-height-1 ">
            Cord Blood Banking Preserve your baby’s cord blood cells at birth &
            protect your entire family from 80+ diseases!{" "}
          </h3>
          <div className="flex  justify-start mt-2 ">
            <button className="px-4 py-2 shadow-md  bg-purple-900 rounded-lg text-zinc-50 ">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-[70vw] flex items-center justify-center">
          <img src="/infant11.png " className=" scale-125 " alt="" />
        </div>
      </div>
      {/* <div className="100-vh">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
        possimus. Eum cupiditate dicta facilis, rem dolore accusamus delectus
        molestiae nemo ea cum qui atque, nisi laboriosam adipisci distinctio
        placeat perspiciatis eveniet consectetur aspernatur tempore, animi
        voluptas eos mollitia? Reiciendis, nostrum?
      </div> */}
      <VideoComponent className="" />
      <Plans />
      <FAQstem />
    </div>
  );
};

export default StemcellPage;
