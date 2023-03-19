import React, { createContext, useState } from "react";

export let Provider = createContext();
const ContextApi = ({ children }) => {
  let [state, setState] = useState("Rashid");
  return (
    <div>
      <Provider.Provider value={state}>{children}</Provider.Provider>
    </div>
  );
};

export default ContextApi;