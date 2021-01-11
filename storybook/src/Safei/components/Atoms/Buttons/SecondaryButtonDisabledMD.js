import React from "react";

const SecondaryDisabledButtonMD = (props) => {
  return (
    <button className="py-2 px-4 btn-secondary-disabled text-md" disabled>
      <span className="inline-block">{props.text}</span>
    </button>
  );
};
export default SecondaryDisabledButtonMD;
