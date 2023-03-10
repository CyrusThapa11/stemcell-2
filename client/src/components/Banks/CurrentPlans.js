/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import MyplanCard from "./MyplanCards";
import { EthContext } from "../../contexts/EthContext";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import Nodata from "./Nodata";
const CurrentPlans = () => {
  // TODO FETCH CURRENT USERS PLANS DATA AND SHOW IT
  // const user
  const { state, dispatch } = useContext(EthContext);
  const [UserPlans, setUserPlans] = useState(null);

  useEffect(() => {
    // first;
    const getdata = async () => {
      const docRef = doc(db, "Donor", state.uid);
      const docSnap = await getDoc(docRef);
      console.log("docSnap.data().plans", docSnap.data().plans);
      console.log("docSnap.data().plans", docSnap.data().plans.length);
      if (docSnap.data().plans.length !== 0) setUserPlans(docSnap.data().plans);
    };
    getdata();
    return () => {};
  }, []);
  return (
    <div className="pt-10  px-1 w-[56vw]  ">
      <div className="flex flex-wrap justify-center items-center ">
        {UserPlans ? (
          UserPlans.map((plan) => {
            if (plan == null) return <></>;
            return (
              <li key={plan.start} className="list-none">
                <MyplanCard
                  color="indigo"
                  plan={plan.plan}
                  start={plan.start}
                />
              </li>
            );
          })
        ) : (
          <Nodata />
        )}
      </div>
    </div>
  );
};

export default CurrentPlans;
