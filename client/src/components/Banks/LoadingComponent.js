import React from "react";
import { ReactLoading } from "react-loading";

const LoadingComponent = () => {
  return (
    <>
      
      <div className="h-[100vh] w-[100vw] bg-teal-300 flex justify-center items-center">
        <ReactLoading
          type={"spin"}
          height={"20%"}
          width={"20%"}
          color={"#fff"}
        />
      </div>
    </>
  );
};

export default LoadingComponent;
