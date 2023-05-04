/* eslint-disable no-unused-vars */
import { DatePicker, TimePicker } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import QueryModal from "./QueryModal";

const PickerWithType = ({ type, onChange }) => {
  if (type === "time") return <TimePicker onChange={onChange} />;
  if (type === "date") return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};

const Datepicker = ({ setAppointmentTime, AppointmentTime }) => {
  const [type, setType] = useState("time");

  // console.log("type is ", type);
  const onChangedate = (value, datestring) => {
    console.log("date ", datestring);
    // onChangedate
    setType({ ...type, date: datestring });
    setAppointmentTime({ ...AppointmentTime, date: datestring });
  };
  const onChangetime = (value, datestring) => {
    console.log("time");
    // onChangedate
    setType({ ...type, time: datestring });
    setAppointmentTime({ ...AppointmentTime, time: datestring });
  };
  return (
    <div className=" font-bold  text-red-600">
      <DatePicker
        onChange={onChangedate}
        picker="date"
        className="mx-5 text-red-600 text-xl"
      />
      <DatePicker
        onChange={onChangetime}
        picker="time"
        className="mx-5 text-red-600 text-xl "
      />
    </div>
  );
};

const NeedyPatientSidebar = ({ imagename }) => {
  return (
    <div className="">
      <aside className="w-64 flex flex-col  " aria-label="Sidebar">
        <div className="flex items-center justify-center">
          <img
            src={imagename || "/profile.png"}
            className="shadow-2xl rounded-full "
            alt=""
          />
        </div>
        <div className="overflow-y-auto py-4 mt-8 px-3 bg-pink-100 rounded dark:bg-gray-800  shadow-xl">
          <ul className="space-y-2">
            <li className="cursor-pointer">
              <p className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-pink-300 ">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <Link
                  to="/Patient/dashboard/"
                  className="flex-1 ml-3 whitespace-nowrap"
                >
                  Profile
                </Link>
              </p>
            </li>
            <li className="cursor-pointer">
              <p className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-pink-300 ">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <Link
                  to="/my-appointments/"
                  className="flex-1 ml-3 whitespace-nowrap"
                >
                  My Appointments
                </Link>
              </p>
            </li>
            <li className="cursor-pointer">
              <p className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-pink-300 ">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <Link
                  to="/create-fund/"
                  className="flex-1 ml-3 whitespace-nowrap"
                >
                  Create-Fund
                </Link>
              </p>
            </li>
            <li className="cursor-pointer">
              <p className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-pink-300 ">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <span
                  to="/book-appointment/"
                  className="flex-1 ml-3 whitespace-nowrap"
                >
                  {/* modal */}
                  <QueryModal
                    text="Disease Inquiry"
                    collectionn="DiseaseInquiry"
                    Datepicker={Datepicker}
                  />
                </span>
              </p>
            </li>
            <li className="cursor-pointer">
              <p className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-pink-300 ">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <Link
                  to="/all-funds/"
                  className="flex-1 ml-3 whitespace-nowrap"
                >
                  All Funds
                </Link>
              </p>
            </li>
            <li className="cursor-pointer">
              <p className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-pink-300 ">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Book Appointment
                </span>
              </p>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default NeedyPatientSidebar;
