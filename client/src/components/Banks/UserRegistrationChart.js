/* eslint-disable no-unused-vars */
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Banglore 1",
      data: labels.map(() => Math.floor(Math.random() * -600 + 999)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Pune 2",
      data: labels.map(() => Math.floor(Math.random() * -600 + 889)),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Delhi 3",
      data: labels.map(() => Math.floor(Math.random() * -600 + 889)),
      borderColor: "rgb(0, 255, 0)",
      backgroundColor: "rgba(0, 255, 0, 0.5)",
    },
  ],
};

export function UserRegistrationChart() {
  return (
    <>
      <div className="rounded-lg shadow-2xl p-5">
        <Line options={options} data={data} />
      </div>
    </>
  );
}
