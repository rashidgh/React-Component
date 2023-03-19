import React, { useState } from 'react'
import { useEffect } from 'react';

const Url = (url) => {
    let [state, setState] = useState("");
    useEffect(() => {
      let fetchData = async () => {
        let data = await window.fetch(url);
        let fData = await data.json();
        setState(fData);
      };
      fetchData();
    }, [url]);
  return state;
}

export default Url