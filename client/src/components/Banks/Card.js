/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ color, title, text, link, text2 }) => {
  return (
    <div
      className={`border-${color}-500 p-2 border-t-4 shadow-2xl bg-neutral-50 w-80 h-72 rounded-lg `}
    >
      <div>
        <h2 className="text-3xl text-pink-600 font-serif ">{title}</h2>
        <p className="text-base">{text}</p>
        {/* <p className="text-base">{text2}</p> */}
        <div className="flex justify-around mt-1 items-center">
          <button className="h-12 px-3 hover:scale-105 focus:scale-90 scale-100 bg-[#B1B2FF] rounded-lg shadow-lg cursor-pointer">
            <Link to={`${link}`}> KNOW MORE</Link>
          </button>
          <div className=" rounded-xl">
            <img
              src="/bodycell1.png"
              className="w-20 bg-sky-200 rounded-xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
