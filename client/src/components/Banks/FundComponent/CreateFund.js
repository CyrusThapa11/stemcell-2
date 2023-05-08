/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import "../Home.css";
import Web3 from "web3";
import process from "process";
import minimist from "minimist";
import { Web3Storage, getFilesFromPath } from "web3.storage";

import FundTabComponent from "./FundTabComponent";
import env from "react-dotenv";

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDBhNzU3ZEFDNTc1MzdkOTNlQjY5MjUzNTFiNmVBNTFjYTI0M0IxMEQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzg3MTMyMzU0NDksIm5hbWUiOiJzdCJ9.WhdSM5s_Vaqidt1vj7aglJQ87R0ypQ5RcD_1AI8s3gQ";
const CreateFund = () => {
	// const { mutateAsync: upload } = useStorageUpload();
	console.log("token", token);
	const storage = new Web3Storage({ token });

	const [DisableCreation, setDisableCreation] = useState(1);
	const [Fund, setFund] = useState(null);
	const [FILE, setFILE] = useState(null);
	const [FILEhash, setFILEhash] = useState(null);

	// TODO UPDATE ABI AND THEN SET

	const createRequest = async () => {
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
			console.log("Fund data ", Fund);
			const data = await contract.methods
				.createRequest(
					Fund.name,
					Fund.description,
					FILEhash,
					FILE.name,
					2,
					Fund.target
				)
				.send(
					{
						from: accounts[0],
						// from: "0x814e3dE7b7eAE63276B38Aa4B49f20b1d49d5ba8",
					},
					function (error, transactionHash) {
						console.log("error --> ", error);
					}
				);
		} catch (err) {
			console.error("err in createRequest", err);
		}
	};

	const uploadToIPFS = async () => {
		console.log("uploadToIPFS file is ", FILE);
		// const file = await upload({
		//   data: [FILE],
		// });
		console.log("uploading to storage !");
		const cid = await storage.put([FILE]);
		setFILEhash(cid);
		console.log("file", cid);
	};

	return (
		// <div className="fund h-[100vh] pt-32 px-48  mb-14">
		//   <div className="flex justify-around ">
		<>
			<div className="p-10 w-full">
				<div className=" items-center justify-center font-medium flex-col">
					<div className="bg-teal-300 w-full rounded-xl py-1 px-5 flex items-center text-slate-50 font-bold shadow-lg h-[100%]">
						<h2>Creat Fund </h2>
					</div>
					{/* start  */}
					<div className="flex gap-4 justify-around fund min-h-100 my-4 p-7 shadow-lg rounded-xl">
						<div className="flex flex-col gap-2 w-[25vw] bg-white bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg p-3 ">
							<div className="mb-1">{/* <FundTabComponent /> */}</div>
							<div className="mb-1">
								<label
									for="large-input"
									className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
								>
									Name
								</label>
								<input
									name="name"
									onChange={(e) =>
										setFund({ ...Fund, [e.target.name]: e.target.value })
									}
									type="text"
									id="large-input"
									className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
							</div>
							<div>
								<label
									for="message"
									className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
								>
									Description
								</label>
								<textarea
									id="message"
									rows="4"
									name="description"
									// maxLength={8}

									onChange={(e) =>
										setFund({ ...Fund, [e.target.name]: e.target.value })
									}
									className="block max-h-32 min-h-25 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Write your thoughts here..."
								></textarea>
							</div>
						</div>
						<div className="flex flex-col w-[25vw] bg-white bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg p-3 ">
							<div className="flex flex-col gap-2">
								<div className="mb-1">
									<label
										for="large-input"
										className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
									>
										Target Amount for fund
									</label>
									<input
										name="target"
										onChange={(e) =>
											setFund({ ...Fund, [e.target.name]: e.target.value })
										}
										type="text"
										id="large-input"
										className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									/>
								</div>
								<div className="mb-1">
									<label
										for="large-input"
										className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
									>
										Deadline (minutes)
									</label>
									<input
										name="deadline"
										onChange={(e) =>
											setFund({ ...Fund, [e.target.name]: e.target.value })
										}
										type="number"
										id="large-input"
										className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									/>
								</div>
							</div>
							<div className="my-2">
								<input
									name="img"
									onChange={(e) => setFILE(e.target.files[0])}
									// setFund({ ...Fund, [e.target.name]: e.target.value })

									type="file"
								/>
							</div>
							<div className="flex">
								<div className="inline-block">
									<button
										onClick={() => uploadToIPFS()}
										className="relative inline-flex items-center justify-center p-0.5 mb-1 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600  dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
									>
										<span className="relative px-5 py-2.5 transition-all ease-in-out duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
											Add to IPFS
										</span>
									</button>
								</div>
								<div className="inline-block">
									<button
										onClick={() => createRequest()}
										className="relative inline-flex items-center justify-center p-0.5 mb-1 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500  dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
									>
										<span className="relative px-5 py-2.5 transition-all ease-in-out duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
											Create Fund
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CreateFund;
