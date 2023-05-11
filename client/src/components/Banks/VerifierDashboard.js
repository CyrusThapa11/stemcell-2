/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { useContext } from "react";
import { EthContext } from "../../contexts/EthContext";
import { db } from "../../firebase";
import { VerticalChart } from "./VerticalChart";

const VerifierDashboard = () => {
  // TODO GET THE REQUESTS FROM INQUIRY DB WITH TIME STAMP ADD FEATURES FOR ADDITION OF SORTING / FILTERING
  const { state, dispatch } = useContext(EthContext);
  const [InquiryState, setInquiryState] = useState([]);
  const [InquiryDetails, setInquiryDetails] = useState([]);
  const { web3, accounts, contract } = state;

  // console.log(" VerifierDashboard sexy deep is here ");
  useEffect(() => {
    // effect
    const getInquries = async () => {
      // console.log(" getting inquiries");
      let newInquiryState = [];
      let allDonor = [];

      const querySnapshot2 = await getDocs(collection(db, "Donor"));
      querySnapshot2.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        if (doc.data().plans && doc.data().plans.length !== 0)
          allDonor.push({ ...doc.data(), id: doc.id });
        // console.log("key --> ", doc.key());
      });
      console.log("allDonor--> ", allDonor);

      setInquiryState([...allDonor]);
      // console.log("InquiryDetails", InquiryDetails);
    };

    getInquries();

    return () => {
      // cleanup
    };
  }, [setInquiryState]);

  const getInquiryDetails = async (donorid) => {
    console.log("getInquiryDetails of ", donorid);
    let convo = [];
    const q = query(
      collection(db, "Inquiry", `${donorid}`, "personal"),
      orderBy("timestamp")
    );

    const querySnapshot2 = await getDocs(q);
    querySnapshot2.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " Q KA  => ", doc.data());
      convo.push({ ...doc.data(), id: donorid });
    });

    setInquiryDetails([...convo]);

    // TODO FETCH HERE THE PERSONAL DETAILS
    // const docRef = doc(db, "Inquiry", "personal");
    // const querySnapshot = await getDocs(
    //   collection(db, "Inquiry", `${donorid}`, "personal")
    // );

    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   // console.log(doc.id, " =>  ", doc.data());
    //   // newInquiryState.push({ ...doc.data(), id: doc.id });
    //   // console.log("key --> ", doc.key());
    //   convo.push(doc.data());
    // });
    //TODO SORT THE DATA HERE
    // const docRef = doc(db, "Inquiry", `${donorid}`, "personal");
    // const docSnap = await getDoc(docRef);
    // console.log("docSnap.data() --> ", docSnap.data());
  };

  const Resolve = async (donorid) => {
    //TODO FETCH THE ETH ID OF THE USER FROM THE DBASE OF DONOR
    // console.log("donorid ", donorid);
    const docRef = doc(db, "Donor", donorid);
    const docSnap = await getDoc(docRef);
    const cost = "0.002";

    // console.log("docSnap.data() -- ", docSnap.data());
    const { ethID } = docSnap.data();
    // console.log("Resolved the inquiry--> ");
    const amount = `${cost}`;
    console.log("ethID--> ", ethID);
    const amountToSend = web3.utils.toWei(amount, "ether");
    // console.log("buying the ethers ! , ", amountToSend);
    const data = await contract.methods.transerferToClient2(ethID).send(
      {
        from: "0x5c53b739f0f452ebc7dcda4899ce1fae2d9cf911",
        // from: "0x814e3dE7b7eAE63276B38Aa4B49f20b1d49d5ba8",
      },
      function (error, transactionHash) {
        // console.log("error --> ", error);
      }
    );
    console.log("data", data);
    //TODO ADD THE PLAN TO CURRENT USERS DB;
    // const washingtonRef = doc(db, "Donor", uid);
  };

  console.log("InquiryDetails --> ", InquiryDetails);
  return (
    <div className="mt-10 ">
      <div className="text-center my-2 ">
        <h1 className="text-4xl my-5  font-extrabold  font-serif text-violet-500">
          VerifierDashboard
        </h1>
      </div>
      {/* <h2>VerifierDashboard</h2> */}
      {/* <div className=" flex px-28 py-10 ">
        {InquiryState?.map((Inquiry) => {
          return (
            <div
              key={Inquiry.timestamp.seconds}
              className=" bg-indigo-400 w-[28vw] rounded-md mx-2 h-[30vh] p-4 shadow-2xl "
            >
              <h2>{Inquiry.text}</h2>
              <h5>{Inquiry.status}</h5>
            </div>
          );
        })}
      </div> */}
      <>
        {/*  */}
        <div className="w-full  flex mx-10 py-8 items-center flex-wrap ">
          <div className=" w-[45vw]  mx-2 ">
            <div className="overflow-x-scroll relative  rounded-xl shadow-2xl">
              <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100 shadow-2xl ">
                <thead className="text-xs text-white uppercase bg-indigo-400 dark:text-white ">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Donor Name
                    </th>
                    <th scope="col" className="py-3 px-6">
                      User-ID
                    </th>

                    <th scope="col" className="py-3 px-6">
                      Action
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-indigo-500 border-b border-blue-400">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      Shreya Gupta
                    </th>
                    <td className="py-4 px-6"> something </td>

                    <td className="py-4 px-6">
                      <span
                        onClick={() => getInquiryDetails()}
                        className="font-medium cursor-pointer text-white hover:underline"
                      >
                        Inspect
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-medium cursor-pointer text-white hover:underline">
                        Resolved
                      </span>
                    </td>
                  </tr>
                  {InquiryState?.map((Inquiry1, index) => {
                    console.log("Inquiry1", Inquiry1);
                    return (
                      <>
                        <tr
                          key={Inquiry1.id}
                          className="bg-indigo-500 border-b border-blue-400"
                        >
                          <th
                            scope="row"
                            className="py-4 px-6 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                          >
                            {Inquiry1.name}
                          </th>
                          <td className="py-4 px-6"> {Inquiry1.id}</td>

                          <td className="py-4 px-6">
                            <span
                              onClick={() => getInquiryDetails(Inquiry1.id)}
                              className="font-medium cursor-pointer text-white hover:underline"
                            >
                              Inspect
                            </span>
                          </td>

                          <td className="py-4 px-6">
                            <span className="font-medium cursor-pointer text-white hover:underline">
                              {index & 1 ? "Resolved" : "Pending"}
                            </span>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  {/* <tr className="bg-indigo-400 border-b border-blue-400">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td className="py-4 px-6">White</td>

                    <td className="py-4 px-6">
                      <span
                        onClick={() => getInquiryDetails()}
                        className="font-medium cursor-pointer text-white hover:underline"
                      >
                        Edit
                      </span>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
          <div className=" w-[40vw]  mx-3">
            <VerticalChart />
          </div>
        </div>

        <div className="h-auto 50vh  w-50vw mx-14 p-5 my-10">
          <h1 className=" text-2xl text-center py-2 bg-lime-300 rounded-xl shadow-xl mb-8 ">
            {" "}
            Inquiry with the donors
          </h1>
          {InquiryDetails?.map((Inq) => {
            return (
              <>
                <div key={Inq.id} className="max-w-xl flex gap-1">
                  <div className="w-20 ">
                    <img
                      src="/profile.png"
                      className=" w-20 shadow-2xl rounded-full p-1"
                      alt=""
                    />
                  </div>
                  <div className="bg-violet-400 mb-5 p-5 max-w-lg rounded-xl shadow-2xl">
                    <div className="flex justify-between">
                      <h2 className="font-bold"> Subject</h2>
                      <span>{Inq.subject}</span>
                    </div>
                    <div className="flex justify-between">
                      <h2 className="font-bold"> Status</h2>
                      <span>{Inq.status}</span>
                    </div>
                    <p className="max-w-lg  break-words "> {Inq.text} </p>
                    <div className="flex justify-around mt-2">
                      <button
                        onClick={() => Resolve(Inq.id)}
                        className="bg-white px-4 py-1 rounded-xl shadow-xl cursor-pointer"
                      >
                        Resolve
                      </button>
                      <button className="bg-white px-4 py-1 rounded-xl shadow-xl cursor-pointer">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className=" flex gap-1 flex-row-reverse justify-start ">
            <div className="max-w-xl flex flex-row-reverse gap-1">
              <div className="w-20  ">
                <img
                  src="/customer.jpg"
                  className="w-20 rounded-full shadow-2xl p-1 "
                  alt=""
                />
              </div>
              <div className="bg-violet-400 mb-5 p-5 max-w-lg rounded-xl shadow-2xl">
                <p className="max-w-lg  break-words ">
                  {" "}
                  Hi it's the verifier here, You can place your request here for
                  physical verification of stem-cell.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default VerifierDashboard;
