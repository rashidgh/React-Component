import React, { useEffect, useState } from "react";

const Child = props => {
  let [state, setState] = useState([]);
  let [val, setVal] = useState("");
  useEffect(() => {
    console.log(props);
    setState(props.item);
    console.log(state);
  }, []);

  let handleSubmit = () => {
    console.log(val);
    props.demo(val);
  };
  return (
    <div>
      <select name="val" value={val} onChange={e => setVal(e.target.value)}>
        {state.map((li, ind) => {
          return (
            <option key={ind} value={li}>
              {li}
            </option>
          );
        })}
      </select>
      <button onClick={handleSubmit}>click</button>
    </div>
  );
};

export default Child;