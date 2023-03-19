// import React, { memo,useEffect } from "react";

// const Memo = props => {
//   useEffect(() => {
//     console.log(props);
//   }, []);
//   return <div></div>;
// };

// export default Memo;


import React, { useCallback,memo } from 'react'

const Memo = (props) => {
  useCallback(() => {
    console.log(props);
  },[])
  
  return (
    <div></div>
  )
}

export default (Memo)