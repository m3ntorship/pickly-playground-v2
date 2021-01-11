import React from "react";

const SecondaryButtonLG = (props) => {
  return (
    <button className="py-4 px-10 btn-secondary text-lg">
      <span className="inline-block">{props.text}</span>
    </button>
  );
};
export default SecondaryButtonLG;
