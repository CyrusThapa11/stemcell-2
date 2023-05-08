/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import "../Home.css";
import Web3 from "web3";
import { Link } from "react-router-dom";
import { actions, EthContext } from "../../../contexts/EthContext";

const AllFundComponent = () => {
	const { state, dispatch } = useContext(EthContext);
	// const navigate = useNavigate();
	const [DisableCreation, setDisableCreation] = useState(1);
	const [AllFunds, setAllFunds] = useState(null);
	const getData = async () => {
		console.log("createRequest");
		// const artifact = require("../../../contracts/Funding.json");
		const artifact = '';
		console.log("artifact", artifact);
		const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
		const accounts = await web3.eth.requestAccounts();
		const networkID = await web3.eth.net.getId();
		const { abi } = artifact;
		console.log("networkID", networkID);
		console.log("accounts--- ", accounts);
		console.log("abi--- ", abi);
		let address, contract;
		try {
			console.log("artifact.networks", artifact.networks);
			address = artifact.networks[networkID].address;

			console.log("address--- ", address);
			contract = new web3.eth.Contract(abi, address);
			// accounts[0]
			// TODO WORK HERE GET / ADD REQUETSS !
			console.log("AllFunds data ", AllFunds);
			const data = await contract.methods.getAllRequests().call(
				{
					from: accounts[0],
				},
				function (error, transactionHash) {
					console.log("error --> ", error);
				}
			);
			console.log("data", data[0].description);
			setAllFunds(data);
			dispatch({ type: actions.add_fund, payload: data });
		} catch (err) {
			console.error("err in createRequest", err);
		}
	};
	useEffect(() => {
		//

		// ? GET DATA
		getData();

		return () => { };
	}, []);

	const createRequest = async () => { };
	return (
		<div className="fund min-h-full py-10 w-full  px-20">
			<div className=" w-full  ">
				<div className="p-2 flex gap-5 flex-wrap items-center justify-center ">
					{/* <h2>AllFundComponent</h2> */}
					{/* <button onClick={() => createRequest()}>CLICK</button> */}

					{AllFunds?.map((fund) => {
						// ! CONVERT TIMESTAMP TO DATE IN JS !
						// let datee = new Date(fund.deadline);
						// console.log("datee", datee);
						let desc = fund.description.substr(
							0,
							Math.min(40, fund.description.length)
						);
						console.log("desc", desc);
						return (
							<>
								<div className=" w-[25vw] h-[60vh]  bg-white bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg p-4">
									{/* <img src={} alt="" /> */}
									<div className="flex items-center justify-center">
										<img
											className="  w-[20vw] max-h-[30vh]"
											src={`https://${fund.imgHash}.ipfs.dweb.link/${fund.imgName}`}
											alt=""
											srcset=""
										/>
									</div>
									<h2>{fund.name}</h2>
									<p>{desc}...</p>
									<div className="flex  justify-between align-items-center  ">
										<p>Target : {fund.target / 1000000000000000000} Eth </p>
										<p>
											Fund raised {fund.fundraised / 1000000000000000000} Eth{" "}
										</p>
									</div>
									<div className="flex  justify-between align-items-center  ">
										<p> Total contributors : {fund.contributers.length} </p>
										<Link to={`/fund/${fund.imgHash}/`} className="outline-2">
											View
										</Link>
									</div>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AllFundComponent;
