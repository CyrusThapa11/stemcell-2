/* eslint-disable no-unused-vars */
import React from "react";
import NeedyContent from "./NeedyContent";

import NeedyPatientSidebar from "./NeedyPatientSidebar";

const NeedyPatient = () => {
  return (
    <>
      <div className="pt-14 px-48 flex mb-14 ">
        <NeedyPatientSidebar imagename="/patient1.png" />
        <NeedyContent />
      </div>
    </>
  );
};

export default NeedyPatient;
