// // import React, { useRef } from 'react'

// // const Uncontrolled = () => {
// //     let inputRef = useRef(null);
// //     let handleClick = () => {
// //         console.log(inputRef.current.value)
// //     }

// //   return (
// //     <div>
// //           <input type="text" onClick={handleClick} ref={ inputRef} />
// //     </div>
// //   )
// // }

// // export default Uncontrolled;

// import React, { useRef } from "react";

// const Uncontrolled = () => {
//   let inputRef = useRef(null);
//   let handleClick = (e) => {
//     e.preventDefault();
//     inputRef.current.style.background = "red";
//     console.log(inputRef.current.value);
//   };

//   return (
//     <form onSubmit={handleClick}>
//       <input type="text" ref={inputRef} onClick={handleClick} />
//       <button>submit</button>
//     </form>
//   );
// };

// export default Uncontrolled;


import React from 'react'
import { useRef } from 'react';
let Uncontrolled = () => {
  let inputRef = useRef(null);
  let handleRef = () => {
    let inp = inputRef.current.value;
    console.log(inp);
  }
  return (
    <div>
      <input
        onClick={() => (inputRef.current.style.background = "lightgreen")}
        type="text"
        ref={inputRef}
      />
      <button onClick={handleRef}>Submit</button>
    </div>
  );
};
export default Uncontrolled;