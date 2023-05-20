import React, { memo } from "react";

const Title = () => {
  console.log("Age & salary");
  return (
    <div>
      <h2>Age & Salary</h2>
    </div>
  );
};

export default memo(Title);
