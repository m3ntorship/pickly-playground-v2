import React from "react";

const SecondaryButtonMD = (props) => {
  return (
    <button className="py-2 px-4 btn-secondary text-md">
      <span className="inline-block">{props.text}</span>
    </button>
  );
};

export default SecondaryButtonMD;
