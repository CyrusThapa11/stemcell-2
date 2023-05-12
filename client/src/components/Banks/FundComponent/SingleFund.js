/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { actions, EthContext } from "../../../contexts/EthContext";
import { useParams } from "react-router-dom";
import Web3 from "web3";

const SingleFund = () => {
  const { state, dispatch } = useContext(EthContext);
  const [Amount, setAmount] = useState(null);

  const [AllFunds, setAllFunds] = useState(null);
  const { id } = useParams();
  console.log("id hash id ", id);
  // let fund = null;
  let statee = state.allFunds;
  console.log("state.allFunds", state.allFunds);
  let fund = null,
    fundNo = -1;
  for (let f in state.allFunds) {
    if (state.allFunds[f].imgHash === id) {
      fund = state.allFunds[f];
      fundNo = f;
    }
  }
  // state.allFunds.forEach((f) => {
  //   if (f.imgHash === id) fund = f;
  // });
  // console.log("state.allFunds", state?.allFunds[0].description);

  const DonateToFund = () => {
    const getData = async () => {
      try {
        console.log("createRequest");
        const artifact = require("../../../contracts/Funding.json");
        // console.log("artifact", artifact);
        const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
        const accounts = await web3.eth.requestAccounts();
        const networkID = await web3.eth.net.getId();
        const { abi } = artifact;
        console.log("networkID", networkID);
        console.log("accounts--- ", accounts);
        console.log("abi--- ", abi);
        let address, contract;
        console.log("artifact.networks", artifact.networks);
        address = artifact.networks[networkID].address;

        console.log("address--- ", address);
        contract = new web3.eth.Contract(abi, address);
        // accounts[0]
        // TODO WORK HERE GET / ADD REQUETSS !
        console.log("AllFunds data ", AllFunds);
        const data = await contract.methods.transferToRequest(fundNo).send(
          {
            from: accounts[0],
            value: Amount * 1000000000000000000,
          },
          function (error, transactionHash) {
            console.log("error --> ", error);
          }
        );
        console.log("data", data[0].description);
      } catch (err) {
        console.error("err in createRequest", err);
      }
    };

    // ? GET DATA
    getData();
  };

  return (
    <>
      {fund && (
        <div className="fund min-h-[100vh] py-10 w-full  px-20 ">
          <div className=" w-full  ">
            <div className="  w-full flex gap-5 bg-white bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg p-6">
              {/* <img src={} alt="" /> */}
              <div className="w-[35vw] my-3 p-5">
                <img
                  src={`https://${fund.imgHash}.ipfs.dweb.link/${fund.imgName}`}
                  alt=""
                  srcset=""
                />
              </div>
              <div className="p-5  my-3  w-[40vw] ">
                <h2>{fund.name}</h2>
                <p>{fund.description}</p>

                <div className="flex my-3 justify-between ">
                  <input
                    type="number"
                    className="px-2 py-1"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <button
                    onClick={() => DonateToFund()}
                    className="outline-violet-700 border-2 border-purple-600 py-2 px-5 rounded-md "
                  >
                    DONATE
                  </button>
                </div>
                <div className="flex my-3 justify-between ">
                  <div>
                    <p>requied amount</p>
                    <p>{fund.target / 1000000000000000000} Eth</p>
                  </div>
                  <div>
                    <p>received amount</p>
                    <p>{fund.fundraised / 1000000000000000000} Eth</p>
                  </div>
                </div>

                <div className="flex flex-col my-2 justify-between align-items-center overflow-y-scroll ">
                  <h2>Recent donations</h2>
                  <p> Total contributors : {fund.contributers.length} </p>
                  {fund &&
                    fund.contributers.map((ethid, index) => {
                      return (
                        <>
                          <div className=" px-3 py-1 flex justify-between gap-2 ">
                            <p> {ethid} </p>
                            <p> Amount : {fund.amoutTocontributers[index]} </p>
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      )}
    </>
  );
};

export default SingleFund;
