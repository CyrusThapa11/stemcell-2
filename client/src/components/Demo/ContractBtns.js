import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Forms from "../Banks/Forms";

function ContractBtns({ setValue }) {
  const {
    state: { contract, accounts },
  } = useEth();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const read = async () => {
    console.log("callign read -");
    let value = await contract.methods.read().call({ from: accounts[0] });
    console.log("value is ", value);
    setValue(value);
  };

  const write = async (e) => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newValue = parseInt(inputValue);
    console.log("newValue in  ContractBtns ", newValue);
    const data = await contract.methods
      .write(newValue)
      .send({ from: accounts[0] });

    console.log("data -- ", data);
  };

  return (
    <>
      <div className="btns">
        <button onClick={read}>read()</button>

        <div onClick={write} className="input-btn">
          write(
          <input
            type="text"
            placeholder="uint"
            value={inputValue}
            onChange={handleInputChange}
          />
          )
        </div>
      </div>
      <div>
        <Forms />
      </div>
    </>
  );
}

export default ContractBtns;
