import React from "react";

const SecondaryButtonSM = (props) => {
  return (
    <button className="h-8 px-3 text-xs btn-secondary">
      <span className="inline-block">{props.text}</span>
    </button>
  );
};
export default SecondaryButtonSM;
