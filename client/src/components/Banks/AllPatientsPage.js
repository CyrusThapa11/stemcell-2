import React, { useContext, useEffect, useState } from "react";
import { EthContext } from "../../contexts/EthContext";
import { VerticalChart } from "./VerticalChart";
import {
  collection,
  doc,
  getDoc,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";

const AllPatientsPage = () => {
  const { state, dispatch } = useContext(EthContext);

  const [NeedyPatients, setNeedyPatients] = useState([]);
  const [UserID, setUserID] = useState(null);
  const { web3, accounts, contract } = state;
  // console.log("accounts in Card Plan", accounts);

  useEffect(() => {
    // effect

    const getNeedyPatients = async () => {
      // console.log(" getting inquiries");
      let newDonorPatients = [];
      const querySnapshot = await getDocs(collection(db, "Patients"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        newDonorPatients.push({ ...doc.data(), id: doc.id });
        // console.log("key --> ", doc.key());
      });
      setNeedyPatients([...newDonorPatients]);
      // console.log("InquiryDetails", InquiryDetails);
    };

    getNeedyPatients();

    return () => {
      // cleanup
    };
  }, [setNeedyPatients]);

  const handleClick = async () => {
    // const amount = "0.0021";
    // const amountToSend = web3.utils.toWei(amount, "ether");
    // console.log("getting allpatientsArray !");

    const allpatientsArray = await contract.methods
      .getAllClients()
      .send({ from: accounts[0] })
      // .call()
      .then((result) => {
        // console.log("result of all patients --> ", result);
      });
    // console.log("allpatientsArray --> ", allpatientsArray);
  };

  const handleTime = async () => {
    // console.log("handleTime  - - ");
    const allpatientsArray = await contract.methods
      .getMyRemainingTime(accounts[0])
      .send({ from: accounts[0] })
      .then((result) => {
        // console.log("result of  handleTime", result);
      });
    // console.log("allpatientsArray ", allpatientsArray);
  };

  const isExpired = async () => {
    // console.log("isExpired  - - ");
    const allpatientsArray = await contract.methods
      .expired(accounts[0])
      .call()
      .then((result) => {
        // console.log("result of  isExpired - ", result);
      });
    // console.log("allpatientsArray ", allpatientsArray);
  };
  const Allocate = async (userID) => {
    console.log("allocating to ", userID);
    if (!UserID) {
      console.log("Invalid userID");
      return;
    }

    // GETTING DATA OF USER WHOSE STEM CELL IT IS !
    const docRef2 = await getDoc(doc(db, "Users", UserID));
    if (docRef2.exists()) {
      const donorData = docRef2.data();
      console.log("donorData --> ", donorData);
      const docRef3 = await getDoc(doc(db, "Donor", donorData.uid));
      console.log("docRef3 --> ", docRef3.data());
      // TODO ASSIGN THE HLA PAIR TO BOTH DONOR AND THE PATIENT !
    } else {
      console.log("Sorry No user Exists ! ");
    }

    // GETTING DOC OF THE PATIENT CURRENT IN UPDATING MODE
    // get doc of current user id from needy patients
    const docRef = await getDoc(doc(db, "Users", userID));
    // const docSnap = await getDoc(docRef);
    console.log("docRef.data().uid --> ", docRef.data().uid);
    const q = query(
      collection(db, "NeedyInquiry", `${userID}`, "personal"),
      orderBy("timestamp")
    );
    const allRequests = [];
    const querySnapshot2 = await getDocs(q);
    querySnapshot2.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " Q KA  => ", doc.data());
      if (
        !doc.data().allocatedStemCell ||
        doc.data().allocatedStemCell === null
      ) {
        allRequests.push({ ...doc.data(), id: doc.id });
      }
    });
    console.log("allRequests --> ", allRequests);
    // allRequests;
    if (allRequests.length === 0) {
      console.log("Sorry cant process your request !");
      return;
    }
    let RecentRequest = { ...allRequests[0] };
    RecentRequest = { ...RecentRequest, allocatedStemCell: UserID };
    //docRef3
    // RecentRequest.
    console.log("RecentRequest.id --> ", RecentRequest.id);
    // const washingtonRef = doc(
    //   db,
    //   "NeedyInquiry",
    //   userID,
    //   "personal",
    //   RecentRequest.id
    // );

    const washingtonRef2 = doc(
      db,
      "NeedyInquiry",
      userID,
      "personal",
      RecentRequest.id
    );
    const docSnap = await getDoc(washingtonRef2);
    console.log("docSnap --> ", docSnap.data());
    const updateallocatedStemCell = await updateDoc(washingtonRef2, {
      allocatedStemCell: UserID,
    });
    console.log("updateallocatedStemCell", updateallocatedStemCell.data());

    //  SYNC THE DATA WITH BLOCKCHAIN !
  };

  console.log("NeedyPatients -> ", NeedyPatients);
  console.log("UserID -> ", UserID);
  // /;

  return (
    <>
      <div className="flex justify-center  mx-10 flex-col items-center  py-10 flex-wrap">
        <div className=" my-5 ">
          <h2 className="text-3xl font-serif ">Patient's table</h2>
        </div>
        <div className="overflow-x-scroll  overflow-y-scroll items-center  h-[50vh] relative shadow-2xl sm:rounded-lg">
          <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100 shadow-2xl ">
            <thead className="text-xs text-white uppercase bg-indigo-400 dark:text-white ">
              <tr>
                <th scope="col" className="py-3 px-4">
                  Patient Identity
                </th>
                <th scope="col" className="py-3 px-4">
                  EthID
                </th>

                <th scope="col" className="py-3 px-4">
                  Action
                </th>
                <th scope="col" className="py-3 px-4">
                  Stem-cell
                </th>

                <th scope="col" className="py-3 px-4">
                  Allocate stem-cell
                </th>

                <th scope="col" className="py-3 px-4">
                  update
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
                    <div className="font-normal text-blue-50">
                      Green@gmail.com
                    </div>
                  </div>
                </th>
                <td className="py-4 px-4"> something </td>

                <td className="py-4 px-4">
                  <Link
                    to="/"
                    className="font-medium cursor-pointer text-white hover:underline"
                  >
                    View
                  </Link>
                </td>
                <td className="py-4 px-4 text-center">
                  <span className="font-medium cursor-pointer text-white hover:underline">
                    none
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
                <td className="py-4 px-4 text-center ">
                  <span className="font-medium cursor-pointer text-white hover:underline">
                    Allocate
                  </span>
                </td>
              </tr>
              {NeedyPatients?.map((Inquiry1, index) => {
                // console.log("Inquiry1", Inquiry1);
                return (
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
                          {Inquiry1.name}
                        </div>
                        <div className="font-normal text-blue-50">
                          {Inquiry1.email}
                        </div>
                      </div>
                    </th>
                    <td className="py-4 px-4">
                      {" "}
                      {Inquiry1.ethID &&
                        Inquiry1.ethID.toString().substring(0, 12)}
                      {Inquiry1.ethID && "..."}
                    </td>

                    <td className="py-4 px-4">
                      <Link
                        to={`/patient/${Inquiry1.id}/`}
                        className="font-medium cursor-pointer text-white hover:underline"
                      >
                        View
                      </Link>
                    </td>

                    <td className="py-4 px-4 text-center">
                      <span className="font-medium cursor-pointer text-white hover:underline text-center">
                        {/* {index & 1 ? "Resolved" : "Pending"} */}
                        {Inquiry1?.ethID?.allocatedStemCell || "none"}
                      </span>
                    </td>
                    <td className="py-4 px-3">
                      <input
                        // value={UserID}
                        type="text"
                        className=" focus:text-gray-700 focus:bg-white border-b-teal-300 focus:outline-none border-b-2 p-1 rounded-sm"
                        placeholder="User-ID"
                        name="UserID"
                        onChange={(e) => setUserID(e.target.value)}
                      />
                    </td>
                    <td className="py-4 px-4 cursor-pointer text-center">
                      <span
                        onClick={() => Allocate(Inquiry1.id)}
                        className="font-medium cursor-pointer text-white hover:underline"
                      >
                        Allocate
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

export default AllPatientsPage;
