/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import {
  doc,
  addDoc,
  setDoc,
  serverTimestamp,
  collection,
} from "firebase/firestore";
import { db } from "../../firebase";
import { EthContext } from "../../contexts/EthContext";
// import firebase from "firebase";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid black",
  },
};

const PatientRequestModal = ({ styles, text, collectionn, Datepicker }) => {
  let subtitle;

  const { state, dispatch } = useContext(EthContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [Inquiry, setInquiry] = React.useState({});
  const [AppointmentTime, setAppointmentTime] = React.useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
  const handleChange = async () => {
    console.log("handlechange , ", state.uid);
    console.log("Inquiry--> ", Inquiry);
    console.log("AppointmentTime", AppointmentTime);
    await addDoc(collection(db, `${collectionn}`, `${state.uid}`, "personal"), {
      ...Inquiry,
      status: "pending",
      allocatedStemCell: "",
      appointedTime: AppointmentTime,
      timestamp: serverTimestamp(),
    });
    closeModal();
  };
  return (
    <div>
      <div className=" relative">
        <button onClick={openModal} className={`${styles}`}>
          {text}
        </button>
        <Modal
          ariaHideApp={false}
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="mx-12 my-5">
            <h1 className="text-4xl mb-3 text-center bg-violet-300 rounded-lg p-3 font-bold shadow-lg   ">
              Inquiry Form
            </h1>
            <div className="flex flex-col justify-center ">
              <div className="mt-3">
                <input
                  type="text"
                  value={Inquiry?.firstname || ""}
                  name="firstname"
                  placeholder="First Name"
                  className=" mx-1 outline-none p-1 border-b-2  border-stone-600 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-violet-400"
                  onChange={(e) =>
                    setInquiry({
                      ...Inquiry,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={Inquiry?.lastname || ""}
                  name="lastname"
                  placeholder="Last Name"
                  className=" mx-1 outline-none p-1  border-b-2 rounded-md  border-stone-600 focus:ring-2 focus:ring-offset-2 focus:ring-violet-400 "
                  onChange={(e) =>
                    setInquiry({
                      ...Inquiry,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="my-2">
                <input
                  type="email"
                  value={Inquiry?.email || ""}
                  name="email"
                  placeholder="Email"
                  className="border-b-2 rounded-md mx-1 p-1 outline-none border-stone-600 focus:ring-2 focus:ring-offset-2 focus:ring-violet-400 "
                  onChange={(e) =>
                    setInquiry({
                      ...Inquiry,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="my-2">
                <input
                  type="text"
                  name="subject"
                  value={Inquiry?.subject || ""}
                  placeholder="Subject"
                  className="border-b-2 rounded-md mx-1 p-1 outline-none border-stone-600 focus:ring-2 focus:ring-offset-2 focus:ring-violet-400 "
                  onChange={(e) =>
                    setInquiry({
                      ...Inquiry,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>

              <div className="my-2">
                <textarea
                  name="text"
                  value={Inquiry?.text || ""}
                  id=""
                  cols="45"
                  rows="3"
                  placeholder="Describe..."
                  className="border-2 p-1 border-stone-800 rounded-lg focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 "
                  onChange={(e) =>
                    setInquiry({
                      ...Inquiry,
                      [e.target.name]: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              {Datepicker && (
                <div className="mt-2">
                  {" "}
                  <span className=" rounded-md mx-1    ">
                    {
                      <Datepicker
                        setAppointmentTime={setAppointmentTime}
                        AppointmentTime={AppointmentTime}
                      />
                    }
                  </span>{" "}
                </div>
              )}
              <div className="flex justify-center gap-2">
                <button
                  onClick={closeModal}
                  className="  shadow-lg bg-indigo-500 rounded-lg px-10 py-2  "
                >
                  Close
                </button>
                <button
                  onClick={handleChange}
                  className="  shadow-lg bg-indigo-500 rounded-lg px-10 py-2  "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default PatientRequestModal;
