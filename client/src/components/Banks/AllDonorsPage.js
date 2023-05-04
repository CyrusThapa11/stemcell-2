/* eslint-disable no-unused-vars */
import {
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import Card from "./Card";

const AllDonorsPage6 = () => {
  const [DonorPatients, setDonorPatients] = useState([]);
  const [CurrentHLA, setCurrentHLA] = useState(null);
  const getDonors = async () => {
    // console.log(" getting inquiries");
    let newDonorPatients = [];
    const querySnapshot = await getDocs(collection(db, "Donor"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      newDonorPatients.push({ ...doc.data(), id: doc.id });
      // console.log("key --> ", doc.key());
    });
    setDonorPatients([...newDonorPatients]);
    // console.log("InquiryDetails", InquiryDetails);
  };
  useEffect(() => {
    getDonors();
  }, []);
  console.log("DonorPatients -> ", DonorPatients);
  const updateHLA = async (userid) => {
    if (!CurrentHLA) {
      console.log("INVALID HLA ");
      return;
    }
    console.log("updateHLA of userid ", userid);
    const docRef = doc(db, "Donor", userid);
    const docSnap = await updateDoc(docRef, {
      HLA: CurrentHLA,
    });
    // update the current value
    getDonors();
  };

  return (
    <>
      <div className="  flex flex-col mx-10 py-8 items-center flex-wrap justify-center">
        <div className=" my-5 ">
          <h2 className="text-3xl font-serif">Donor's table</h2>
        </div>
        <div className="overflow-x-scroll overflow-y-scroll relative  rounded-xl shadow-2xl">
          <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100 shadow-2xl ">
            <thead className="text-xs text-white uppercase bg-indigo-400 dark:text-white ">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Donor Name
                </th>
                <th scope="col" className="py-3 px-6">
                  UserID
                </th>
                <th scope="col" className="py-3 px-6">
                  HLA
                </th>
                <th scope="col" className="py-3 px-6">
                  Status
                </th>

                <th
                  scope="col"
                  className="py-3 px-6 flex items-center - justify-center text-center "
                >
                  UPDATE HLA
                </th>
                <th scope="col" className="py-3 px-6">
                  UPDATE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-indigo-500 border-b border-blue-400">
                <th
                  scope="row"
                  className=" flex items-center py-2 px-6 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="/customer.jpg"
                    alt="..."
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">Bonnie Green</div>
                    {/* <div className="font-normal text-blue-50">
                      Green@gmail.com
                    </div> */}
                  </div>
                </th>
                <td className="py-4 px-6"> something </td>

                <td className="py-4 px-6">
                  <span className="font-medium cursor-pointer text-white hover:underline">
                    {"0x107e8d146E9394C1aA3bB7eEE098AF92EBc5F3f7".substring(
                      0,
                      12
                    )}
                    ...
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-medium cursor-pointer text-white hover:underline">
                    Resolved
                  </span>
                </td>
                <td className="py-4 px-3">
                  <input
                    // value={`${Email}`}
                    type="text"
                    className=" focus:text-gray-700 focus:bg-white border-b-teal-300 focus:outline-none border-b-2 p-1 rounded-sm"
                    placeholder="User-ID"
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
                <td className="py-4 px-6">
                  <span className="font-medium cursor-pointer text-white hover:underline">
                    ADD
                  </span>
                </td>
              </tr>
              {DonorPatients?.map((Inquiry1, index) => {
                // console.log("Inquiry1", Inquiry1);
                return (
                  <tr
                    key={Inquiry1.id}
                    className="bg-indigo-500 border-b border-blue-400"
                  >
                    <th
                      scope="row"
                      className=" flex items-center py-4 px-6 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src="/customer.jpg"
                        alt="..."
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          {Inquiry1.name || "User2"}
                        </div>
                      </div>
                    </th>

                    <td className="py-4 px-6">
                      {" "}
                      {/* {Inquiry1.ethID &&
                        Inquiry1.ethID.toString().substring(0, 12)} */}
                      {Inquiry1.id}
                    </td>

                    <td className="py-4 px-6">
                      <span className="font-medium cursor-pointer text-white hover:underline ">
                        {Inquiry1.HLA &&
                          Inquiry1?.HLA.toString().substring(0, 12)}
                        {Inquiry1.HLA && "..."}
                        {!Inquiry1.HLA && "not calculated"}
                      </span>
                    </td>

                    <td className="py-4 px-6">
                      <span className="font-medium cursor-pointer text-white hover:underline">
                        {index & 1 ? "Resolved" : "Pending"}
                      </span>
                    </td>
                    <td className="py-4 px-3">
                      <input
                        // value={`${Email}`}
                        type="text"
                        className=" focus:text-gray-700 focus:bg-white border-b-teal-300 focus:outline-none border-b-2 p-1 rounded-sm"
                        placeholder="User-HLA"
                        onChange={(e) => setCurrentHLA(e.target.value)}
                      />
                    </td>
                    <td className="py-4 px-6">
                      <span
                        onClick={() => updateHLA(Inquiry1.id)}
                        className="font-medium cursor-pointer text-white hover:underline "
                      >
                        ADD
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllDonorsPage6;
