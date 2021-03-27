import React, { useState } from "react";
import PropTypes from "prop-types";

const Radio = ({ size = "small", disabled = false }) => {
  const [checked, setChecked] = useState(false);

  const iconSize = size === "small" ? "w-4 h-4" : "w-6 h-6";

  const isDisabled = disabled === true ? "pointer-events-none opacity-25" : "";

  const isChecked =
    checked && size === "small"
      ? "border-primary border-4"
      : checked && size === "default"
      ? "border-primary border-8"
      : "border border-grey-shd4 hover:border-grey-shd1";

  return (
    <div className="relative">
      <input type="radio" className="w-0 h-0 opacity-0 absolute" />
      <div
        className={`cursor-pointer rounded-full bg-white
                ${iconSize}
                ${isDisabled}
                ${isChecked}     
                `}
        onClick={() => setChecked(!checked)}
      ></div>
    </div>
  );
};

Radio.propTypes = {
  size: PropTypes.oneOf(["default", "small"]),
  disabled: PropTypes.bool,
};

export default Radio;
