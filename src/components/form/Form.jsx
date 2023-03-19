import React, { useState } from "react";

const Form = () => {
  let [course, setCourse] = useState({});
  let [state, setState] = useState({
    ename: "",
    gender: "",

    branch: "",
    adress: "",
  });
  let { ename, gender, branch, adress } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleCourse = e => {
    let { name, checked } = e.target;
    setCourse({ ...course, [name]: checked });
  };

  let handleSubmit = e => {
    e.preventDefault();
    console.log(state);
    console.log(course);
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        height: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "fit-content",
        fontSize: "20px",
      }}
    >
      <input
        type="text"
        name="ename"
        value={ename}
        onChange={handleChange}
        placeholder="enter name"
      />
      <div name="gender" value={gender} onChange={handleChange}>
        <input type="radio" name="gender" value="male" />
        male
        <input type="radio" name="gender" value="female" />
        female
      </div>
      <div>
        <input
          type="checkbox"
          name="java"
          checked={course["checkbox1"]}
          onChange={handleCourse}
        />
        java
        <input
          type="checkbox"
          name="python"
          checked={course["checkbox2"]}
          onChange={handleCourse}
        />
        python
        <input
          type="checkbox"
          name="node"
          checked={course["checkbox3"]}
          onChange={handleCourse}
        />
        node
      </div>
      <select name="branch" value={branch} onChange={handleChange}>
        <option value="">select branch</option>
        <option value="hebbal">hebbal</option>
        <option value="basvangudi">basvangudi</option>
        <option value="rajajinagar">rajajinagar</option>
      </select>
      <br />
      <textarea
        name="adress"
        value={adress}
        onChange={handleChange}
        placeholder="enter adress"
      ></textarea>
      <button>submit</button>
    </form>
  );
};

export default Form;

// import React, { useState } from "react";

// function Form() {
//   const [checkedItems, setCheckedItems] = useState({}); // checked state for each checkbox item

//   const handleChange = event => {
//     const { name, checked } = event.target;
//     setCheckedItems({ ...checkedItems, [name]: checked }); // update checked state for the clicked checkbox
//     };
//     console.log(checkedItems)

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           name="checkbox1"
//           checked={checkedItems["checkbox1"]}
//           onChange={handleChange}
//         />
//         Checkbox 1
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           name="checkbox2"
//           checked={checkedItems["checkbox2"]}
//           onChange={handleChange}
//         />
//         Checkbox 2
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           name="checkbox3"
//           checked={checkedItems["checkbox3"]}
//           onChange={handleChange}
//         />
//         Checkbox 3
//       </label>
//     </div>
//   );
// }

// export default Form;
