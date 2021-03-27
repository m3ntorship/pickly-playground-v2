import React, { useState } from "react";
import PropTypes from "prop-types";

export const TOGGLE = {
  SIZE: {
    DEFAULT: "default",
    SMALL: "small",
  },
};

export const Toggle = ({ size, disabled = false }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  const divsize = size === TOGGLE.SIZE.DEFAULT ? "w-10 h-6" : "w-7 h-4";
  const spansize = size === TOGGLE.SIZE.DEFAULT ? "w-4 h-4" : "w-2.5 h-2.5";
  const style = checked
    ? "bg-primary-shd7 hover:bg-primary-shd6 focus:border-primary-shd5 focus:border "
    : "bg-grey-shd4 hover:bg-grey-shd3 focus:border-grey-shd4 ";

  return (
    <>
      <div
        className={`relative rounded-full focus:outline-none flex items-center 
              ${disabled && "pointer-events-none opacity-25"}  
              ${divsize} 
              ${style} 
              
             
            }`}
      >
        <span
          className={`inline-block rounded-lg transform transition-all duration-500 ease-in-out
               ${checked ? "bg-primary" : "bg-white"}
               ${checked ? "mr-1" : "ml-1"}
               ${spansize}           
               ${TOGGLE.SIZE.DEFAULT && checked && "translate-x-8"}
               ${TOGGLE.SIZE.SMALL && checked && "translate-x-3.5"}
              `}
        ></span>
        <input
          onClick={handleCheck}
          type="checkbox"
          className="opacity-0 absolute cursor-pointer w-full h-full"
        />
      </div>
    </>
  );
};

Toggle.propTypes = {
  size: PropTypes.oneOf(["default", "small"]),
  disabled: PropTypes.bool,
};

export default Toggle;
