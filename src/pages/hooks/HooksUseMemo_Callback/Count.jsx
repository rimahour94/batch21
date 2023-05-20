import React, { memo } from "react";

const Count = ({ count }) => {
  console.log(count);
  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default memo(Count);
