import React, { useContext } from "react";
import { EthContext } from "../../contexts/EthContext";
import { updateDoc, getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../../firebase";
const CardPlan = ({ feature1, feature2, feature3, plan, cost }) => {
  // TODO REGISTER CANDIDATE FOR THE BLOCKCHAIN CONTENT in firebase too !!

  const { state, dispatch } = useContext(EthContext);
  const { web3, accounts, contract } = state;

  const { uid } = state;

  console.log("accounts in Card Plan", accounts);
  const handleClick = async (cost, plan) => {
    const amount = `${cost}`;
    const amountToSend = web3.utils.toWei(amount, "ether");
    console.log("buying the ethers !");
    contract.methods
      .registerCandidate(accounts[0])
      .send(
        { from: accounts[0], value: amountToSend },
        function (error, transactionHash) {
          console.log("transactionHash --> ", transactionHash);
        }
      );
    //TODO ADD THE PLAN TO CURRENT USERS DB;
    const washingtonRef = doc(db, "Donor", uid);

    const docSnap = await getDoc(washingtonRef);
    console.log("docSnap2--> ", docSnap.data());
    let newplan = [
      ...docSnap.data().plans,
      { plan: `${plan}`, start: Date.now() },
    ];
    console.log("newplan", newplan);
    await updateDoc(washingtonRef, {
      plans: newplan,
    });
    const docSnap2 = await getDoc(washingtonRef);
    console.log("docSnap2--> ", docSnap2);
  };

  return (
    <div className="border-2 cursor-pointer hover:-translate-y-8 transition-all bg-green-100 shadow-xl h-[60vh] xl:w-[25vw]  rounded-xl p-4  ">
      <div className="mb-5">
        <h1 className="font-serif xl:text-2xl lg:text-xl">Starting at </h1>
        <span className="font-serif xl:text-5xl lg:text-3xl">{cost} Eth</span>
      </div>
      <div className="bg-lime-50 flex justify-center rounded-xl py-3 mb-4">
        <h4 className="font-serif xl:text-2xl text-xl">{plan}</h4>
      </div>
      <div>
        <div className="mb-4 flex  ">
          <img src="/tick.png" className="w-5 h-5 mx-2" alt="" />
          <p>{feature1}</p>
        </div>
        <div className="mb-4 flex  ">
          <img src="/tick.png" className="w-5 h-5 mx-2" alt="" />
          <p>{feature2}</p>
        </div>
        <div className="mb-4 flex  ">
          <img src="/tick.png" className="w-5 h-5 mx-2" alt="" />
          <p>{feature3}</p>
        </div>
        <div className="mb-4 flex  ">
          <img src="/tick.png" className="w-5 h-5 mx-2" alt="" />
          <p>{feature1}</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => handleClick(cost, plan)}
            className=" w-[50%] transition-all px-5 py-2 rounded-lg cursor-pointer shadow-lg bg-[#937DC2] font-bold font-sans text-zinc-50 hover:bg-zinc-50 hover:text-[#937DC2] "
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPlan;
