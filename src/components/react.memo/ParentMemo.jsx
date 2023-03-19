// import React, { useState } from "react";
// import Memo from "./Memo";
// const ParentMemo = () => {
//     let [state, setState] = useState(0);
//     let [item, setItem] = useState(100);

//   return (
//     <div>
//       <Memo value={item} />
//       <h4>{state}</h4>
//       <button onClick={()=>setState(state+1)}>Increment</button>
//     </div>
//   );
// };

// export default ParentMemo;


import React, { useState } from 'react'
import Memo from './Memo';

const ParentMemo = () => {
  let [state, setState] = useState(0);
  return (
    <div><Memo value="hello" />
      <h4>{ state}</h4>
      <button onClick={()=>setState(state+1)}>Increment</button></div>
  )
}

export default ParentMemo;