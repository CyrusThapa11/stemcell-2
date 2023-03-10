/* eslint-disable no-unused-vars */
import React from "react";
import PieChart from "./PieChart";
import { UserRegistrationChart } from "./UserRegistrationChart";
import { VerticalChart } from "./VerticalChart";
let datasets1 = [
  {
    label: "# of Votes",
    data: [12, 21, 3, 5, 2, 3],
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(255, 159, 64, 0.2)",
    ],
    borderColor: [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)",
    ],
    borderWidth: 1,
  },
];
let datasets2 = [
  {
    label: "# of Votes",
    data: [13, 19, 4],
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
    ],
    borderColor: [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
    ],
    borderWidth: 1,
  },
];

const BankData = () => {
  return (
    <div className="overflow-x-hidden" id="my-node">
      <div className="flex mx-10 justify-center my-7 items-center flex-col ">
        <div className="flex mx-10 justify-center my-7 items-center">
          <div className=" w-[25vw] m-5 ">
            <PieChart
              labelss={[
                "Banglore",
                "Dehli",
                "Pune",
                "Hyderabad",
                "Chandigarh",
                "Ahmedabad",
              ]}
              datasetss={datasets1}
            />
          </div>
          <div className=" w-[35vw] mx-3 ">
            <VerticalChart />
          </div>
        </div>
        <div className="flex mx-10 justify-center my-7 items-center">
          <div className=" w-[35vw] m-2 ">
            <UserRegistrationChart />
          </div>
          <div className=" w-[25vw] m-2 ">
            <PieChart
              labelss={["Yearly-plan", "Half-yearly-plan", "Quarterly-plan"]}
              datasetss={datasets2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankData;
