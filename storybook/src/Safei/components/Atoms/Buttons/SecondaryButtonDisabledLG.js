import React from "react";

const SecondaryDisabledButtonLG = (props) => {
  return (
    <button className="py-4 px-10 btn-secondary-disabled text-lg" disabled>
      <span className="inline-block">{props.text}</span>
    </button>
  );
};
export default SecondaryDisabledButtonLG;
