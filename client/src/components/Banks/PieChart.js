/* eslint-disable no-unused-vars */
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import domtoimage from "dom-to-image";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
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
  ],
};

const PieChart = ({ labelss, dataa, datasetss }) => {
  //<button onClick={() => print()}>Print</button>

  const print = () => {
    console.log("printing");
    domtoimage
      .toJpeg(document.getElementById("pie-1"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });

    // printing
  };

  console.log("labelss", labelss);

  return (
    <div className="rounded-lg shadow-2xl p-5">
      <Pie data={{ ...data, labels: labelss, datasets: datasetss }} />
    </div>
  );
};

export default PieChart;
