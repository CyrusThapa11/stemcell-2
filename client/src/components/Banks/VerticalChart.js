import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      //   position: 'top' as const,
      position: "top",
    },
    title: {
      display: true,
      text: "Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Webiste visits",
      data: labels.map(() => Math.floor(Math.random() * 1000 + 400)),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Actual buyers",
      data: labels.map(() => Math.floor(Math.random() * 300 + 100)),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function VerticalChart() {
  return (
    <>
      <div className="rounded-lg shadow-2xl">
        <Bar options={options} data={data} />
      </div>
    </>
  );
}
