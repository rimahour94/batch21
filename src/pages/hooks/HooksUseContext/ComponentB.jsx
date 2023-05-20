import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { userContext } from "./HooksUseContext";
const ComponentB = () => {
  const data = useContext(userContext);
  return (
    <div>
      ComponentB
      <h2>{data.sub}</h2>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
