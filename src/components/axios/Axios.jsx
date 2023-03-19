import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import styles from "./axios.module.css";

const Axios = () => {
  let [state, setState] = useState([]);
  let [search, setSearch] = useState("");
  useEffect(async () => {
    try {
      let { data } = await axios.get("https://api.github.com/users");
      setState(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <input
        type="text"
        name="search"
        value={search}
        placeholder="search by name..."
        onChange={e => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Photo</th>
        </thead>
        <tbody>
          {state.map((li, ind) => {
            if (
              li.id.toString().includes(search) ||
              li.login.toLowerCase().includes(search)
            ) {
              return (
                <tr key={ind}>
                  <td>{li.id}</td>
                  <td>{li.login}</td>
                  <td>
                    <img src={li.avatar_url} alt="" />
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Axios;
