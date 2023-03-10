/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import ReactLoading from "react-loading";

import { EthContext } from "../../contexts/EthContext";
import {
  collection,
  addDoc,
  getDoc,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { data } from "./VerticalChart";
import LoadingComponent from "./LoadingComponent";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  // TODO SET ADD LOGIN REGISTER FUNCTIONALITY

  const { state, dispatch } = useContext(EthContext);
  const [userState, setstate] = useState({});
  const navigate = useNavigate();

  const register = async () => {
    if (
      !userState.password ||
      !userState.email ||
      !userState.ethID ||
      !userState.name ||
      !userState.type
    ) {
      console.log("Error message");
      toast.error("Incomplete credentials");
      return;
    }

    console.log("register --> ");
    console.log("userState --> ", userState);
    dispatch({ type: "SET_LOADING" });
    let newUserState = { ...userState };
    // TODO ADD OTHER FILEDS
    if (`${userState.type}` === "Donor") {
      newUserState = {
        ...newUserState,
        isExpired: false,
        isPresent: true,
        patientType: "Donor",
        amount: 0,
        plans: [],
        HLA: "",
        allocatedStemCell: "",
        photoURL: "",
      };
    } else {
      newUserState = {
        ...newUserState,
        patientType: `${userState.type}`,
        amount: 0,
        photoURL: "",
      };
    }
    const docRef = await addDoc(
      collection(db, `${userState.type}`),
      newUserState
    );

    const q = query(
      collection(db, `${userState.type}`),
      where("email", "==", userState.email)
    );
    const querySnapshot = await getDocs(q);
    let loggeduser;
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      // TODO DISPATCH AND ACTION
      loggeduser = { ...doc.data(), uid: doc.id };
      // email: "dhruv3@gmail.com";
      // ethID: "fdsa2131";
      // name: "dhruv3";
      // password: "donor3";
      // type: "Donor";
      // console.log(doc.data());
    });
    delete loggeduser["password"];
    console.log("loggeduser --> ", loggeduser);
    const docRef2 = await setDoc(doc(db, `Users`, loggeduser.uid), {
      email: loggeduser.email,
      uid: loggeduser.uid,
      type: `${userState.type}`,
    });
    console.log("docRef2", docRef2);

    toast.success("Registered Sucessfully");
    dispatch({
      type: "UPDATE",
      data: { ...loggeduser },
    });
    dispatch({ type: "UNSET_LOADING" });
    // TODO NAVIGATE TO PROFILE-PAGE

    // navigate(`${userState.type}/dashboard`);
    if (userState.type === "Donor") {
      navigate(`/Donor/dashboard`);
    } else if (userState.type === "Patients") {
      navigate(`/Patient/dashboard`);
    } else if (userState.type === "Bank") {
      navigate(`/Bank/dashboard`);
    } else {
      // ;
      navigate(`/Verifier/dashboard`);
    }
  };

  const login = async () => {
    if (!userState.password || !userState.email || !userState.type) {
      console.log("Error message");
      toast.error("Incomplete credentials");
      return;
    }
    dispatch({ type: "SET_LOADING" });
    console.log("register --> ");
    // const docRef = doc(db, `${userState.type}`);
    // const docSnap = await getDoc(docRef);
    const q = query(
      collection(db, `Users`),
      where("email", "==", userState.email)
    );
    const querySnapshot = await getDocs(q);
    let user;
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      // TODO DISPATCH AND ACTION
      user = { ...doc.data(), uid: doc.id };
    });
    console.log("user --> ", user);
    const docRef = doc(db, user.type, user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data: ", docSnap.data());
      let newuser = docSnap.data();

      delete user["password"];

      // TODO CHECK HERE
      if (newuser.password !== userState.password) {
        // console.log("Invalid Credentials ");
        toast.error("Invalid Credentials");
        dispatch({ type: "UNSET_LOADING" });
        return;
      } else {
        console.log(" PASSWORD MATCHED");
        toast("Logged-in Sucessfully");
        dispatch({
          type: "UPDATE",
          data: { ...newuser, uid: user.uid },
        });

        if (user.type === "Donor") {
          navigate(`/Donor/dashboard`);
        } else if (user.type === "Patients") {
          navigate(`/Patient/dashboard`);
        } else if (user.type === "Bank") {
          navigate(`/Bank/dashboard`);
        } else {
          navigate(`/Verifier/dashboard`);
        }
      }
    } else {
      // doc.data() will be undefined in this case
      toast.error("No user Exists");
      console.log("No such document!");
    }

    dispatch({ type: "UNSET_LOADING" });
  };

  return (
    <>
      <div className="z-20">
        <ToastContainer />
      </div>
      <>
        {state.loading ? (
          <div className="h-[100vh] w-[100vw] bg-teal-300 flex justify-center items-center z-10 ">
            <ReactLoading
              type={"spin"}
              height={"20%"}
              width={"20%"}
              color={"#fff"}
            />
          </div>
        ) : (
          <></>
        )}
      </>

      {!state.loading && (
        <div className="flex flex-col py-5 px-20 my-10">
          <div className="flex justify-center items-center">
            <div className="">
              <img src="/fam1.png" className="w-[65vw]" alt="" />
            </div>
            <div className="w-[50%]">
              <div className="bg-teal-400 h-[85vh] flex items-center justify-center rounded-xl shadow-2xl">
                <div className=" w-[80%] px-5 ">
                  <div className="m-2 flex flex-col">
                    <label className="cursor-pointer font-bold" htmlFor="">
                      Name
                    </label>
                    <input
                      value={userState.name}
                      name="name"
                      className="rounded-sm outline-none shadow-sm p-1 "
                      type="text"
                      onChange={(e) =>
                        setstate({
                          ...userState,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="m-2 flex flex-col">
                    <label className="cursor-pointer font-bold" htmlFor="">
                      Email
                    </label>
                    <input
                      value={userState.email}
                      name="email"
                      className="rounded-sm outline-none shadow-sm p-1 "
                      type="email"
                      onChange={(e) =>
                        setstate({
                          ...userState,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="m-2 flex flex-col">
                    <label className="cursor-pointer font-bold" htmlFor="">
                      Password
                    </label>
                    <input
                      value={userState.password}
                      name="password"
                      className="rounded-sm outline-none shadow-sm p-1 "
                      type="password"
                      onChange={(e) =>
                        setstate({
                          ...userState,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="m-2 flex flex-col">
                    <label className="cursor-pointer font-bold" htmlFor="">
                      Eth ID
                    </label>
                    <input
                      value={userState.ethID}
                      name="ethID"
                      className="rounded-sm outline-none shadow-sm p-1 "
                      type="text"
                      onChange={(e) =>
                        setstate({
                          ...userState,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="m-2 flex flex-col">
                    <label
                      className="cursor-pointer font-bold flex justify-between w-[15vw]"
                      htmlFor="Donor"
                    >
                      Donor
                      <input
                        onChange={(e) =>
                          setstate({
                            ...userState,
                            [e.target.name]: e.target.value,
                          })
                        }
                        type="radio"
                        className="mx-5"
                        value="Donor"
                        name="type"
                        id="Donor"
                      />
                    </label>
                    <label
                      className="cursor-pointer font-bold flex justify-between w-[15vw]"
                      htmlFor="Patients"
                    >
                      Needy Patient
                      <input
                        onChange={(e) =>
                          setstate({
                            ...userState,
                            [e.target.name]: e.target.value,
                          })
                        }
                        type="radio"
                        className="mx-5"
                        value="Patients"
                        name="type"
                        id="Patients"
                      />
                    </label>
                    <label
                      className="cursor-pointer font-bold flex justify-between w-[15vw]"
                      htmlFor="Bank"
                    >
                      Bank
                      <input
                        onChange={(e) =>
                          setstate({
                            ...userState,
                            [e.target.name]: e.target.value,
                          })
                        }
                        type="radio"
                        className="mx-5"
                        value="Bank"
                        name="type"
                        id="Bank"
                      />
                    </label>
                    <label
                      className="cursor-pointer font-bold flex justify-between w-[15vw]"
                      htmlFor="Verifier"
                    >
                      Verifier
                      <input
                        onChange={(e) =>
                          setstate({
                            ...userState,
                            [e.target.name]: e.target.value,
                          })
                        }
                        type="radio"
                        className="mx-5"
                        value="Verifier"
                        name="type"
                        id="Verifier"
                      />
                    </label>
                  </div>

                  <div className="flex justify-around m-3 ">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        login();
                      }}
                      className="cursor-pointer font-bold border-4 border-white px-4 py-1 rounded-lg shadow-xl "
                    >
                      Login
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        register();
                      }}
                      className="bg-white px-4 py-1 rounded-lg text-teal-600 font-bold shadow-xl "
                    >
                      Register
                    </button>
                  </div>

                  <div className="bg-white px-6 py-2 rounded-lg m-3 flex items-center justify-center cursor-pointer">
                    <h2 className="mx-1">Login with google</h2>
                    <img src="/glogo.png" className="w-[3vw] " alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
