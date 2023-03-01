import React from "react";
import CurrentPlans from "./CurrentPlans";
import Profile from "./Profile";
import Sidebar from "./Sidebar";

const PatientPlans = () => {
  return (
    <div className="pt-14 flex md:px-32 md:pl-44  mb-14  m-1 ">
      {/* <Profile /> */}
      <Sidebar />
      <CurrentPlans />
    </div>
  );
};

export default PatientPlans;
