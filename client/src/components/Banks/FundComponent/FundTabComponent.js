/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../Home.css";
// import "bootstrap/dist/css/bootstrap.css";
import CreateFund from "./CreateFund";
import SingleFund from "./SingleFund";
import AllFundComponent from "./AllFundComponent";

const FundTabComponent = () => {
  // const [key, setKey] = useState("home");
  return (
    <>
      <div className="fund min-h-[100vh] py-10 px-20  mb-14">
        <div className=" ">
          <Tabs
            defaultActiveKey="longer-tab"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="longer-tab" title="AllFundComponent">
              <AllFundComponent />
            </Tab>
            <Tab eventKey="home" title="CreateFund">
              <CreateFund />
            </Tab>
            <Tab eventKey="profile" title="SingleFund">
              {/* <SingleFund /> */}
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default FundTabComponent;
