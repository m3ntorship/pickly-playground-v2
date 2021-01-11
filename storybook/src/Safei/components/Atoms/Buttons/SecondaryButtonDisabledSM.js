import React from "react";

const SecondaryDisabledButtonSM = (props) => {
  return (
    <button className="h-8 px-3 text-xs btn-secondary-disabled" disabled>
      <span className="inline-block">{props.text}</span>
    </button>
  );
};
export default SecondaryDisabledButtonSM;
