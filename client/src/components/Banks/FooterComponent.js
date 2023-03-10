/* eslint-disable no-unused-vars */
import React from "react";

const FooterComponent = () => {
  return (
    <div className="font-serif px-5 md:px-10 lg:px-36 text-neutral-50 transition-all bg-pink-500 ">
      <>
        <footer className=" body-font text-neutral-50">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-wrap md:text-left text-center order-first">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-neutral-50  tracking-widest text-sm mb-3">
                  SHOP
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-50">
                      Health Bank
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-50">
                      Health Check
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-50">
                      Health Clinic
                    </p>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-neutral-50  tracking-widest text-sm mb-3">
                  Help
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-50">
                      Terms and Conditions
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-50">
                      Privacy Policy
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-50">
                      Cookie Policy
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-50">
                      Shipping & Returns
                    </p>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-neutral-50  tracking-widest text-sm mb-3">
                  About Us
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-200">
                      Events
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-200">
                      Our Story
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-200">
                      Media
                    </p>
                  </li>
                  <li>
                    <p className="text-neutral-50 cursor-pointer hover:text-neutral-200">
                      Certifications
                    </p>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-neutral-50  tracking-widest text-sm mb-3">
                  Contact Us
                </h2>
                <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                  <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                    <label
                      htmlFor="footer-field"
                      className="leading-7 text-sm text-neutral-50"
                    >
                      Ask your query
                    </label>
                    <input
                      type="text"
                      id="footer-field"
                      name="footer-field"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Button
                  </button>
                </div>
                <p className="text-neutral-50 text-sm mt-2 md:text-left text-center">
                  1800 2665533
                  <br className="lg:block hidden" />
                  Locate Us
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
};

export default FooterComponent;
