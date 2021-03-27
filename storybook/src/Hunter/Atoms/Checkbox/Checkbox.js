import React, { useState } from "react";
import PropTypes from "prop-types";

const Checkbox = ({ size = "default", disabled = false }) => {
  const [checked, setChecked] = useState(false);

  const checkboxSize = size === "default" ? "w-6 h-6 " : "w-4 h-4 ";

  const iconSize = size === "default" ? "w-4 h-4 " : "w-3 h-3 ";

  return (
    <div className="relative">
      <input type="checkbox" className="w-0 h-0 opacity-0 absolute" />
      <div
        className={`cursor-pointer border border-grey-shd4 flex items-center justify-center hover:border-grey-shd1 transition-all duration-500 ease-out rounded-sm 
                    ${disabled ? "pointer-events-none opacity-25" : ""}
                    ${checked ? "bg-primary" : "bg-white"}    
                    ${checkboxSize}    
                    `}
        onClick={() => setChecked(!checked)}
      >
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66632 10.3907L4.47099 8.19539L3.52832 9.13806L6.66632 12.2761L13.1377 5.80473L12.195 4.86206L6.66632 10.3907Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </div>
  );
};

Checkbox.PropTypes = {
  size: PropTypes.oneOf(["default", "small"]),
  disabled: PropTypes.bool,
};

export default Checkbox;
