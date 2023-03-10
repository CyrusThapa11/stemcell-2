/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { EthContext } from "../../contexts/EthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const AllStemCellsPage = () => {
  const { state, dispatch } = useContext(EthContext);
  const [Stemcells, setStemcells] = useState([]);

  useEffect(() => {
    const getData = async () => {
      console.log("getting stem cells ");
      const querySnapshot = await getDocs(collection(db, "Donor"));
      let cells = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        let cell = {
          name: doc.data().Name || "User",
          ethID: doc.data().ethID || "0x0000000000000",
          email: doc.data().email || "User@gmail.com",
          HLA: doc.data().HLA,
        };
        cells.push(cell);
      });
      console.log("cells --> ", cells);

      // TODO FETCH OTHER BANKS CELLS
      setStemcells([...cells]);
    };
    getData();
  }, []);
  return (
    <div className="p-5 lg:w-[60vw]" id="pie-1">
      <div className="bg-teal-300 rounded-lg py-2 shadow-xl p-5 ">
        <h2 className="text-center  font-extrabold text-lg ">
          Stemcell's Data
        </h2>
        <div className="flex flex-wrap ">
          {" "}
          <button className="mx-5 my-2 text-white font-bold px-5 py-1 rounded-md bg-teal-600 shadow-lg ">
            Available
          </button>{" "}
          <button
            onClick={() => {
              console.log(" exipred");
            }}
            className="mx-5 my-2 text-white font-bold px-5 py-1 rounded-md bg-teal-600 shadow-lg "
          >
            Expired
          </button>
          <button className="mx-5 my-2 text-white font-bold px-5 py-1 rounded-md bg-teal-600 shadow-lg ">
            Donors only
          </button>{" "}
          <button className="mx-5 my-2 text-white font-bold px-5 py-1 rounded-md bg-teal-600 shadow-lg ">
            Public Bank
          </button>
          <button className="mx-5 my-2 text-white font-bold px-5 py-1 rounded-md bg-teal-600 shadow-lg ">
            All
          </button>
        </div>
      </div>
      <div className=" my-5 ">
        <ul className="flex flex-wrap items-center justify-center">
          {Stemcells.map((cell) => {
            return (
              <div className="flex flex-col w-[23vw] bg-teal-300 rounded-md p-5 m-3 shadow-xl relative ">
                <img
                  src="/cells4.jpg"
                  className="w-[6vw] rounded-full absolute right-2 "
                  alt=""
                />
                <div className="mt-2">
                  <h2 className="my-1">Name - {cell.name}</h2>
                  <h2 className="my-1">
                    EthID - {cell.ethID.substring(0, 12)}...
                  </h2>
                  <h2 className="my-1">
                    email - {cell.email.substring(0, 12)}...
                  </h2>
                </div>
                <button className="bg-white rounded-md py-1 m-1 font-bold cursor-pointer shadow-lg ">
                  VIEW
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AllStemCellsPage;
