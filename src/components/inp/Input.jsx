import React, { useState } from 'react'

const Input = () => {
    let [state,setState]=useState("")
  return (
    <div>
      <input
        type="text"
        value={state}
        onChange={e => setState(e.target.value)}
      />
      <input type="text" name="" id="" />
      <input
        type="text"
        value={state}
        onChange={e => setState(e.target.value)}
      />
    </div>
  );
}

export default Input
