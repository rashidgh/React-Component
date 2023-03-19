import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  // let [data,setData]=useState("")
  let getData = (data) => {
    console.log(data)
  }
  return (
    <div>
      <Child item={[1, 2, 3, 4, 5]} demo={getData} />

    </div>
  );
};

export default Parent;

