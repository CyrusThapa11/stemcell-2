import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { EthContext } from "../../contexts/EthContext";
import { db } from "../../firebase";

const NeedyContent = () => {
  // TODO SEE WHOS LOGGEDIN AND CHANGE HIS DATA IF HE CHANGES IT

  const { state, dispatch } = useContext(EthContext);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [EthID, setEthID] = useState("");
  const [Password, setPassword] = useState("");

  const update = async () => {
    const docRef = doc(db, "Users", state.uid);
    const docSnap = await getDoc(docRef);
    let actualdata;
    if (docSnap.data().type === "Donor") {
      actualdata = await getDoc(doc(db, "Donor", state.uid));
    } else if (docSnap.data().type === "Patient") {
      actualdata = await getDoc(doc(db, "Patients", state.uid));
    }
    console.log("actualdata --> ", actualdata.data());
    dispatch({
      type: "UPDATE",
      data: { ...actualdata.data() },
    });
  };
  useEffect(() => {
    console.log("state in NeedyContent", state);
    const getData = async () => {
      const washingtonRef = doc(db, "Patients", state.uid);

      const data = await getDoc(washingtonRef);
      console.log("data is ", data.data());
    };
    getData();
  }, []);
  return (
    <div className="p-10 w-full">
      <div className=" items-center justify-center font-medium flex-col">
        <div className="bg-teal-300 w-full rounded-xl py-1 px-5 flex items-center text-slate-50 font-bold shadow-lg h-[100%]">
          <h2>UserDetails Details</h2>
        </div>

        <>
          <div className="overflow-x-auto relative mt-7 shadow-lg rounded-lg   ">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Data field
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Detail
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Change
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Update
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Name
                  </th>
                  <td className="py-4 px-3">{state.Name || state.name} </td>
                  <td className="py-4 px-3">
                    <input
                      value={`${Name}`}
                      type="text"
                      className=" focus:text-gray-700 focus:bg-white border-b-teal-300 focus:outline-none border-b-2 "
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                  <td className="py-4 px-3">
                    <button
                      onClick={async () => {
                        console.log("clicked !");
                        const washingtonRef = doc(db, "Donor", state.uid);
                        // Set the "capital" field of the city 'DC'
                        await updateDoc(washingtonRef, {
                          Name: `${Name}`,
                        });
                        update();
                      }}
                      className="bg-teal-200 px-4 py-1 rounded-md shadow-md focus:outline-none focus:border-none "
                    >
                      EDIT
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Email
                  </th>
                  <td className="py-4 px-3">{state.email} </td>
                  <td className="py-4 px-3">
                    <input
                      value={`${Email}`}
                      type="text"
                      className=" focus:text-gray-700 focus:bg-white border-b-teal-300 focus:outline-none border-b-2 "
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                  <td className="py-4 px-3">
                    <button
                      onClick={async () => {
                        console.log("clicked !");
                        console.log("clicked !");
                        const washingtonRef = doc(db, "Donor", state.uid);
                        // Set the "capital" field of the city 'DC'
                        await updateDoc(washingtonRef, {
                          email: `${Email}`,
                        });
                        update();
                      }}
                      className="bg-teal-200 px-4 py-1 rounded-md shadow-md"
                    >
                      EDIT
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Password
                  </th>
                  <td className="py-4 px-3">********** </td>
                  <td className="py-4 px-3">
                    <input
                      type="text"
                      value={`${Password}`}
                      className=" focus:text-gray-700 focus:bg-white border-b-teal-300 focus:outline-none border-b-2 "
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </td>
                  <td className="py-4 px-3">
                    <button
                      onClick={async () => {
                        console.log("clicked ! ");
                        console.log("clicked ! ");
                        const washingtonRef = doc(db, "Donor", state.uid);
                        // Set the "capital" field of the city 'DC'
                        await updateDoc(washingtonRef, {
                          Password: `${Password}`,
                        });
                        update();
                      }}
                      className="bg-teal-200 px-4 py-1 rounded-md shadow-md"
                    >
                      EDIT
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    HLA data
                  </th>
                  <td className="py-4 px-3">{state.HLA}</td>
                  <td className="py-4 px-3">
                    <input
                      type="text"
                      className=" focus:text-gray-700 focus:bg-white border-b-teal-300 focus:outline-none border-b-2 disabled:bg-slate-50 stroke-2 line-through  "
                      placeholder="HLA Data"
                      disabled
                    />
                  </td>
                  <td className="py-4 px-3">
                    <button
                      className="bg-teal-200 px-4 py-1 rounded-md shadow-md disabled:bg-slate-50 disabled:text-slate-500"
                      disabled
                    >
                      EDIT
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Ethereum ID
                  </th>
                  <td className="py-4 px-3">{state.ethID}</td>
                  <td className="py-4 px-3">
                    <input
                      type="text"
                      value={`${EthID}`}
                      className=" focus:text-gray-700 focus:bg-white border-b-teal-300 focus:outline-none border-b-2 "
                      placeholder="Ethereum ID"
                      onChange={(e) => setEthID(e.target.value)}
                    />
                  </td>
                  <td className="py-4 px-3">
                    <button
                      onClick={async () => {
                        console.log(" clicked ! ");
                        console.log(" clicked ! ");
                        const washingtonRef = doc(db, "Donor", state.uid);
                        // Set the "capital" field of the city 'DC'
                        await updateDoc(washingtonRef, {
                          ethID: `${EthID}`,
                        });
                        update();
                      }}
                      className="bg-teal-200 px-4 py-1 rounded-md shadow-md"
                    >
                      EDIT
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      </div>
    </div>
  );
};

export default NeedyContent;
