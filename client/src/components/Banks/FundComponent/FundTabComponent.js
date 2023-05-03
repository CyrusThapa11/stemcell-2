/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../Home.css";
// import "bootstrap/dist/css/bootstrap.css";
import CreateFund from "./CreateFund";
import SingleFund from "./SingleFund";
import AllFundComponent from "./AllFundComponent";
import NeedyContent from "../NeedyContent";
import NeedyPatientSidebar from "../NeedyPatientSidebar";

const FundTabComponent = () => {
  // const [key, setKey] = useState("home");
  return (
    <>
      <div className="pt-14 px-48 flex mb-14 ">
        <NeedyPatientSidebar imagename="/patient1.png" />
        <CreateFund />
      </div>
    </>
  );
};

export default FundTabComponent;
