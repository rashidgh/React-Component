// import React, { useState } from "react";

// const DyInput = () => {
//   let [inp, setInp] = useState([""]);
//   console.log(inp);

//   let handleChange = (a, b) => {
//     let list = inp.map((c, d) => {
//       return d == b ? a : c;
//     });
//     setInp(list);
//   };

//   let Add = () => {
//     setInp([...inp, ""]);
//   };
//   let remove = e => {
//     let list1 = [...inp];
//     list1.splice(e, 1);
//     setInp(list1);
//   };
//   return (
//     <div>
//       {inp.map((li, id) => {
//         return (
//           <>
//             <input
//               value={li}
//               onChange={e => handleChange(e.target.value, id)}
//             />
//             {inp.length - 1 === id && (
//               <button
//                 onClick={Add}
//                 style={{ display: inp.length < 6 ? "block" : "none" }}
//               >
//                 +
//               </button>
//             )}
//             {inp.length !== 1 && <button onClick={() => remove(id)}>-</button>}
//             <br />
//           </>
//         );
//       })}
//     </div>
//   );
// };

// export default DyInput;

// !
import React, { useState } from "react";

const DyInput = () => {
  let [state, setState] = useState([{ valuee: "",item:"" }]);

  console.log(state)
  let handleChange = (e, i) => {
    let { name, value } = e.target;
    let list = [...state];
    list[i][name] = value;
    setState(list);
  };
  let Add = () => {
    setState([...state, { valuee: "",item:"" }]);
  };
  let remove = e => {
    let list1 = [...state];
    list1.splice(e, 1);
    setState(list1);
  };
  return (
    <div>
      {state.map((li, id) => {
        return (
          <div key={id}>
            <input
              name="valuee"
              value={li.valuee}
              onChange={e => handleChange(e, id)}
            />
            <input
              name="item"
              value={li.item}
              onChange={e => handleChange(e, id)}
            />
            {state.length - 1 === id && <button onClick={Add}>+</button>}
            {state.length !== 1 && (
              <button onClick={() => remove(id)}>-</button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DyInput;
