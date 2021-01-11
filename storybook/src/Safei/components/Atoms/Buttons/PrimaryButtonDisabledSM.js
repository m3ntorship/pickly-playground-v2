import React from "react";
import "../../../../css/button.css";

function PrimaryButtonDisabledSM(props) {
  return (
    <>
      <button className="h-8 px-3 text-xs btn-primary-disabled" disabled>
        <span className="inline-block">{props.text}</span>
        <svg
          className="w-3 h-4 inline-block ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </>
  );
}

export default PrimaryButtonDisabledSM;
