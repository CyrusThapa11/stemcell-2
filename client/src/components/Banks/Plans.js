/* eslint-disable no-unused-vars */
import React from "react";
import CardPlan from "./CardPlan";

const Plans = () => {
  return (
    <div className=" xl:h-[85vh] px-20 pt-14 md:mb-2  pb-24  ">
      <h1 className="text-4xl flex justify-center mb-14 font-serif ">
        Customised Storage Plans With Maximum Benefits & Security
      </h1>
      <div className="flex gap-9  justify-center flex-wrap lg:flex-nowrap ">
        <CardPlan
          cost="0.2"
          plan="Annual Storage Storage "
          feature1="Unlimited Retrieval"
          feature2="Dual-site storage"
          feature3="Free shipping of matched units"
        />
        <CardPlan
          cost="0.3"
          plan="Half-Yearly Storage Plan "
          feature1="Unlimited Retrieval"
          feature2="Dual-site storage"
          feature3="Free shipping of matched units"
        />
        <CardPlan
          cost="0.4"
          plan="Monthly Storage Plan "
          feature1="Unlimited Retrieval"
          feature2="Dual-site storage"
          feature3="Free shipping of matched units"
        />
      </div>
    </div>
  );
};

export default Plans;
