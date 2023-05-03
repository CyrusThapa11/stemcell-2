/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { EthContext } from "../../contexts/EthContext";

import classes from "../../Css/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({ login, logout }) => {
  const { state, dispatch } = useContext(EthContext);
  const { web3, accounts, contract } = state;

  // TODO USE THIS FUNCTION
  const getbalance = async () => {
    console.log("getbalance --> ");
    const data = await contract.methods
      .getContractBalance()
      .call({ from: accounts[0] }, function (error, transactionHash) {
        console.log("transactionHash --> ", transactionHash);
      });
    console.log("data ", data);
  };

  return (
    <div>
      <header
        className={`text-gray-600 body-font shadow-xl ${classes.navbar} text-slate-50 font-serif font-semibold `}
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <p className="flex title -font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/logo.png" className="h-16 scale-x-125" alt="" />
            <Link to="/">
              <span className="ml-3 text-3xl font-serif text-fuchsia-800 cursor-pointer ">
                Eth Cell Bank
              </span>
            </Link>
          </p>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <>
              {state.type === "Bank" && (
                <>
                  <Link
                    to="/Bank/dashboard/"
                    className="mr-5 cursor-pointer font-semibold hover:bg-[#ECC5FB] hover:text-purple-600 p-2 rounded-lg"
                  >
                    Bank Dashboard
                  </Link>
                </>
              )}
            </>

            <>
              {state.type === "Verifier" && (
                <>
                  <Link
                    to="/Verifier/dashboard/"
                    className="mr-5 cursor-pointer font-semibold hover:bg-[#ECC5FB] hover:text-purple-600 p-2 rounded-lg"
                  >
                    verifier
                  </Link>
                </>
              )}
            </>

            <>
              {!state.uid && (
                <>
                  <Link
                    to="/Login/"
                    className="mr-5 cursor-pointer font-semibold hover:bg-[#ECC5FB] hover:text-purple-600 p-2 rounded-lg"
                  >
                    Login
                  </Link>
                </>
              )}
            </>
            <Link
              to="/stem-cell-bank/"
              className="mr-5 cursor-pointer font-semibold hover:bg-[#ECC5FB] hover:text-purple-600 p-2 rounded-lg"
            >
              Home
            </Link>
            <Link
              to="/all-funds/"
              className="mr-5 cursor-pointer font-semibold hover:bg-[#ECC5FB] hover:text-purple-600 p-2 rounded-lg"
            >
              All Fundings
            </Link>
            <Link
              to="/blog/"
              className="mr-5 cursor-pointer font-semibold hover:bg-[#ECC5FB] hover:text-purple-600 p-2 rounded-lg"
            >
              All Blogs
            </Link>

            <Link
              to="/addblog/"
              className="mr-5 cursor-pointer font-semibold hover:bg-[#ECC5FB] hover:text-purple-600 p-2 rounded-lg"
            >
              Add Blog
            </Link>
            {/* <p className="mr-5 cursor-pointer font-semibold hover:bg-[#ECC5FB] hover:text-purple-600 p-2 rounded-lg">
              Cart
            </p> */}
            {/*  */}
            {/* TODO UPDATE THIS BUTTON SET ! */}
            <button
              onClick={() => getbalance()}
              className="mr-5 cursor-pointer font-semibold hover:bg-[#ECC5FB] hover:text-purple-600 p-2 rounded-lg"
            >
              getBalance
            </button>
            <>
              {state.type === "Donor" && (
                <>
                  <Link
                    to="/my-plans/"
                    className="mr-5 cursor-pointer font-semibold hover:bg-[#ECC5FB] hover:text-purple-600 p-2 rounded-lg"
                  >
                    Profile
                  </Link>
                </>
              )}
              {state.type === "Patients" && (
                <>
                  <Link
                    to="/Patient/dashboard"
                    className="mr-5 cursor-pointer font-semibold hover:bg-[#ECC5FB] hover:text-purple-600 p-2 rounded-lg"
                  >
                    Profile
                  </Link>
                </>
              )}
            </>
          </nav>
          <button
            onClick={() => {
              if (state.uid) logout();
              else login();
            }}
            className="inline-flex items-center bg-[#c536ab] shadow-xl border-0 py-1 px-3 focus:outline-none hover:bg-[#B1B2FF] rounded text-base mt-4 md:mt-0"
          >
            {state.uid ? <>Logout</> : <>Login</>}
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
