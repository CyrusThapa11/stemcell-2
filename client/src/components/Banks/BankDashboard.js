/* eslint-disable no-unused-vars */
import React from "react";
import BankSidebar from "./BankSidebar";
import Content from "./Content";

const BankDashboard = ({ Component }) => {
  return (
    <div className="relative">
      {/* BankDashboard */}
      <div className="pt-10 px-10 flex mb-7 justify-around flex-wrap md:flex-nowrap">
        {/* <Profile /> */}
        <BankSidebar />
        {/* <Content /> */}
        <>
          <Component />
        </>
      </div>
    </div>
  );
};

export default BankDashboard;
