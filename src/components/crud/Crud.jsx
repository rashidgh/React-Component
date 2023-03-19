import styles from "./crud.module.css";
import React, { useState, useEffect } from "react";
import AxiosInstance from "./AxiosInstance";
import { AiTwotoneDelete, AiOutlineEdit } from "react-icons/ai";

const Crud = () => {
  let [state, setState] = useState({
    ename: "",
    email: "",
  });

  let [condition, setCondition] = useState(true);

  let [item, setItem] = useState([]);

  let { ename, email } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    console.log(state);
    let payload = state;

    let { data } = await AxiosInstance.post("/data", payload);
    console.log(data);
    window.location.reload();
  };

  useEffect(() => {
    let fetchData = async () => {
      let { data } = await AxiosInstance.get("/data");
      console.log(data);
      setItem(data);
    };
    fetchData();
  }, []);

  let handleDelete = id => {
    AxiosInstance.delete(`/data/${id}`);
    window.location.reload();
  };

  let handleEdit = async id => {
    let { data } = await AxiosInstance.get(`/data/${id}`);
    console.log(data);
    setState(data);
  };

  let handleUpdate = () => {
    let payload = state;
    AxiosInstance.patch(`/data/${state.id}`, payload);
    window.location.reload();
  };
  return (
    <div className={styles.Parent}>
      <div className={styles.formBlock}>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="ename"
              value={ename}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </div>

          <div>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
          <div>
            {condition ? (
              <button>submit</button>
            ) : (
              <button onClick={() => handleUpdate()}>update</button>
            )}
          </div>
        </form>
      </div>
      <div className={styles.tableBlock}>
        <table style={{ border: "1px solid" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {item.map((li, ind) => {
              let { ename, email } = li;
              return (
                <tr key={ind}>
                  <td>{ename||"NA"}</td>
                  <td>{email || "NA"}</td>
                  <td>
                    <button onClick={() => handleDelete(li.id)}>
                      <AiTwotoneDelete />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={_ => {
                        handleEdit(li.id);
                        setCondition(false);
                      }}
                    >
                      <AiOutlineEdit />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Crud;
