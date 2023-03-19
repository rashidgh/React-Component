import axios from "axios";
import React, { useEffect } from "react";

const Revision = () => {
  useEffect(async () => {
    try {
      let { data } = await axios.get("https://fakestoreapi.com/products");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return <div>Revision</div>;
};

export default Revision;
