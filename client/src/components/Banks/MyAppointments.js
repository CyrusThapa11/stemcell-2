import React, { useContext, useEffect, useState } from "react";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import MyplanCard from "./MyplanCards";
import { EthContext } from "../../contexts/EthContext";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import Nodata from "./Nodata";

const MyAppointments = () => {
  const { state, dispatch } = useContext(EthContext);
  const [UserPlans, setUserPlans] = useState(null);
  const [request, setRequest] = useState([]);
  useEffect(() => {
    // first;
    console.log("user id is ", state.uid);
    const getdata = async () => {
      const q = query(
        collection(db, "DiseaseInquiry", `${state.uid}`, "personal"),
        orderBy("timestamp")
      );
      const allRequests = [];
      const querySnapshot2 = await getDocs(q);
      console.log(querySnapshot2);
      querySnapshot2.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, "--->>", doc.data());
        allRequests.push({ ...doc.data(), id: doc.id });
      });
      console.log("allRequests --> ", allRequests);
      if (allRequests.length === 0) {
        console.log("Sorry cant process your request !");
        return;
      }
      setRequest([...allRequests]);
    };
    getdata();
    return () => {};
  }, [setRequest]);
  return (
    <>
      <div className="flex justify-center  mx-10 flex-col items-center  py-10 flex-wrap">
        <div className=" my-5 ">
          <h2 className="text-3xl font-serif ">Inquiry table</h2>
        </div>
        <div className="overflow-x-scroll  overflow-y-scroll items-center  h-[50vh] relative shadow-2xl sm:rounded-lg">
          <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100 shadow-2xl ">
            <thead className="text-xs text-white uppercase bg-indigo-400 dark:text-white ">
              <tr>
                <th scope="col" className="py-3 px-4">
                  Patient Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Request ID
                </th>

                <th scope="col" className="py-3 px-4">
                  Appointed Time
                </th>
                <th scope="col" className="py-3 px-4">
                  Status
                </th>

                <th scope="col" className="py-3 px-4">
                  Subject
                </th>

                <th scope="col" className="py-3 px-4">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {request?.map((Inquiry1) => {
                console.log("Inquiry1", Inquiry1);
                return (
                  <>
                    <tr
                      key={Inquiry1.id}
                      className="bg-indigo-500 border-b border-blue-400"
                    >
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
                          <div className="text-base font-semibold">
                            {Inquiry1.firstname}
                          </div>
                          <div className="font-normal text-blue-50">
                            {Inquiry1.email}
                          </div>
                        </div>
                      </th>
                      <td className="py-4 px-4">{Inquiry1.id}</td>
                      <td className="py-4 px-4">
                        <div className="pl-3">
                          <div className="text-base font-semibold">
                            {Inquiry1.appointedTime.date}
                          </div>
                          <div className="font-normal text-blue-50">
                            {Inquiry1.appointedTime.time}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="pl-3">{Inquiry1.status}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="pl-3">
                          <p>{Inquiry1.subject}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="pl-3">
                          <p>{Inquiry1.text}</p>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyAppointments;
