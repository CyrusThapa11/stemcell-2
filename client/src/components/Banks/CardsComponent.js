import React from "react";
import Card from "./Card";

const CardsComponent = () => {
  return (
    <div className="bg-[#FEE3EC] h-auto p-2 pt-14 flex flex-col ">
      <h1 className="text-4xl font-serif pb-14 px-10 text-pink-600 font-bold ">
        Making the best & most affordable healthcare accessible to all indian
        families right from preconception to parenthood & beyond
      </h1>
      <div className="flex justify-around flex-wrap  md:flex-nowrap gap-3  pt-3 pb-8 ">
        <div className="flex justify-center items-center">
          <Card
            text="Cryopreservation, or freezing of cells and tissues at low temperatures so that they’re available when needed in the future, is a proven way of helping you prepare better for a healthier tomorrow."
            title="Stem Cell Bank"
            color="teal"
            link="/stem-cell-bank/"
          />
        </div>
        <div className="flex flex-col gap-4 ">
          <Card
            text="Preserving Hope by preserving Cells, Genes & Tissues. We provide simple, accessible ways to help you stay on top of your health today, from preconception to parenthood, and beyond"
            text2=""
            title="Health Check"
            color="yellow"
            link="/stem-cell-bank/"
          />{" "}
          <Card
            text="Preserving Hope by preserving Cells, Genes & Tissues"
            title="Beauty"
            color="indigo"
            link="/stem-cell-bank/"
          />
        </div>{" "}
        <div className="flex justify-center items-center">
          <Card
            text="Transplantation of human cells & tissues to replace or repair damaged tissue and/or cells is already helping thousands of patients each year across the globe."
            title="Health Clinic"
            color="green"
            link="/stem-cell-bank/"
          />
        </div>
      </div>
    </div>
  );
};

export default CardsComponent;
