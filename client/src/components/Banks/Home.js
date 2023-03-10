/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";

import Carasouls from "./Forms/Carasouls";
import CardsComponent from "./CardsComponent";
import FooterComponent from "./FooterComponent";
import VideoComponent from "./VideoComponent";
import Testimonials from "./Testimonials";

const Home = () => {
  // function to login page
  return (
    <>
      <div className="">
        <Carasouls />
      </div>
      <CardsComponent />
      <VideoComponent />
      <Testimonials />
    </>
  );
};

export default Home;
