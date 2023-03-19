import React, { useState, useEffect } from "react";
import JSON1 from "../../filter.json";
import styles from "./filter.module.css";

const Filter = () => {
  let [state, setState] = useState(JSON1.data);
  let [inp, setInp] = useState("");

  return (
    <div>
      <input
        type="text"
        name="inp"
        value={inp}
        onChange={e => setInp(e.target.value)}
        placeholder="search by name..."
      />

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Company</th>
          </tr>
        </thead>

        <tbody>
          {state.map((li, ind) => {
            if (
              li.id.toString().includes(inp) ||
              li.ename.toLowerCase().includes(inp) ||
              li.company.toLowerCase().includes(inp)
            ) {
              return (
                <tr key={ind}>
                  <td>{li.id}</td>
                  <td>{li.ename}</td>
                  <td>{li.company}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Filter;
