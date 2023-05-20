import React, { memo } from "react";

const Buttons = ({ children, clickHandler }) => {
  console.log(children);
  return (
    <div>
      <button onClick={clickHandler}>{children}</button>
    </div>
  );
};

export default memo(Buttons);
