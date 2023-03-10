/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import QueryModal from "./QueryModal";

const MyplanCard = ({ color, title, text, link, plan, start }) => {
  let datestart = new Date(start);

  console.log("datestart --> ", datestart.toDateString());
  let enddate = new Date(
    datestart.getFullYear() + 40,
    datestart.getMonth(),
    datestart.getDate()
  );

  console.log("enddate --> ", enddate.toDateString());

  return (
    <div
      className={`border-${color}-500 m-3 p-2 border-t-4 shadow-2xl bg-neutral-50 w-64 h-60 flex justify-center items-center rounded-lg `}
    >
      <div>
        <h2 className="text-3xl text-pink-600 font-serif  ">{title}</h2>
        <p className="text-base bg-sky-200 rounded-md py-1 px-2 text-center">
          {plan}
        </p>
        <p className="text-base pt-1 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
          <br />
          <div className="flex justify-between ">
            <span className="font-bold">From : </span>
            <span>{datestart.toDateString()}</span>
          </div>
          <div className="flex justify-between ">
            <span className="font-bold">Valid Till : </span>
            <span>{enddate.toDateString()}</span>
          </div>
        </p>
        <div className="flex justify-around mt-2 items-center">
          <button className=" font-bold h-10 px-2 hover:scale-105 focus:scale-90 scale-100 bg-[#B1B2FF] rounded-lg shadow-lg cursor-pointer">
            <Link to={`${link}`}> KNOW MORE</Link>
          </button>
          <div className=" rounded-xl">
            {/* <img
              src="/bodycell1.png"
              className="w-16 bg-sky-200 rounded-xl"
              alt=""
            /> */}
            <QueryModal
              sytles="border-violet-400 text-violet-500 border-4 px-4 py-1 rounded-lg  font-bold shadow-lg"
              text="INQUIRE"
              collectionn="Inquiry"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyplanCard;
