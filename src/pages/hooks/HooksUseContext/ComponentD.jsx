import React, { useContext } from "react";
import ComponentE from "./ComponentE";
import { userContext } from "./HooksUseContext";
const ComponentD = () => {
  const data = useContext(userContext);
  return (
    <div>
      ComponentD
      <h2>{data.name}</h2>
      <ComponentE />
    </div>
  );
};

export default ComponentD;
