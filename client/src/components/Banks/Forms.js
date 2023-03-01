import React, { useState } from "react";
import { useEth } from "../../contexts/EthContext";

const Forms = () => {
  const {
    state: { contract, accounts },
  } = useEth();
  const [inputValue, setInputValue] = useState("");
  const [verifier, setverifier] = useState("");
  const [Clients, setClients] = useState([]);

  const setVerifier = async () => {
    console.log("callign setVerifier - ", inputValue);
    let value = await contract.methods
      .setVerifier(inputValue)
      .send({ from: accounts[0] });

    console.log("value is ", value);
    // setInputValue(value);
  };
  const get_verifier = async () => {
    const address = await contract.methods
      .getVerifier()
      .call({ from: accounts[0] });
    setverifier(address);
  };

  const getClients = async () => {
    const Clientss = await contract.methods
      .getAllClients()
      .call({ from: accounts[0] });
    setClients(Clientss);
    console.log("Clientss", Clientss);
  };

  return (
    <div>
      {/* <form> */}
      {/* setVerifier */}
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        name="verifier"
        id=""
      />
      {/* <input type="text" value="amount" name="" id="" /> */}
      <button onClick={setVerifier}>Send</button>
      <h2 onClick={get_verifier}>Veirfer is : {verifier} </h2>
      {/* </form> */}
      <h4 onClick={getClients}>getClients </h4>
      <ul>
        {Clients.length > 0 &&
          Clients.map((el) => {
            console.log(el);
            if (el.personid === "0x0000000000000000000000000000000000000000")
              return <></>;
            else
              return (
                <>
                  <li>
                    <h3>{el} </h3>
                  </li>
                </>
              );
          })}
      </ul>
    </div>
  );
};

export default Forms;
