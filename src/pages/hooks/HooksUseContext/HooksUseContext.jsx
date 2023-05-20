import React from "react";
import ComponentA from "./ComponentA";

export let userContext = React.createContext();
const HooksUseContext = () => {
  let obj = {
    name: "Kunal",
    roll: "121",
    sub: "REACTJS",
  };
  return (
    <div>
      <userContext.Provider value={obj}>
        <ComponentA />
      </userContext.Provider>
    </div>
  );
};

export default HooksUseContext;
