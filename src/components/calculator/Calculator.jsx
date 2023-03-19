import React, { useState } from "react";

const Calculator = () => {
  let [inp1, setInp1] = useState("");
  let [inp2, setInp2] = useState("");

  let handleSubmit = e => {
    e.preventDefault();
  };

  let Add = () => {
    let total = Number(inp1) + Number(inp2);
    console.log(total);
  };
  let sub = () => {
    let total = Number(inp1) - Number(inp2);
    console.log(total);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{ width: "80px", height: "50px" }}
        type="text"
        value={inp1}
        onChange={e => setInp1(e.target.value)}
      />
      <input
        style={{ width: "80px", height: "50px" }}
        type="text"
        value={inp2}
        onChange={e => setInp2(e.target.value)}
      />
      <button style={{ width: "80px", height: "50px" }} onClick={Add}>
        Add
      </button>
      <button style={{ width: "80px", height: "50px" }} onClick={sub}>
        Sub
      </button>
    </form>
  );
};

export default Calculator;
