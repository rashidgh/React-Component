import React, { useState } from "react";
import Portal from "./Portal";

const PortalApp = () => {
    let [state, setState] = useState(true);
    console.log(state)
  return (
      <div>
          {state?"":<Portal />}
      <button onClick={() => setState(!state)}>Toggle</button>
    </div>
  );
};

export default PortalApp;
