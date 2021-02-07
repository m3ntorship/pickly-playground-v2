import React, { useState } from "react";
import PropTypes from "prop-types";

const Radio = (props) => {
  const { size = "lg", disabled = false } = props;
  const [checked, setChecked] = useState(false);
  return (
    <div className="relative">
      <input type="radio" className="w-0 h-0 opacity-0 absolute" />
      <div
        className={`cursor-pointer rounded-full bg-white ${
          size === "md" ? "w-4 h-4" : "w-6 h-6"
        } ${
          checked
            ? `${size === "md" ? "border-4" : "border-8"} border-primary`
            : "border border-grey-shd4 hover:border-grey-shd1"
        } ${disabled ? "pointer-events-none opacity-25" : ""}`}
        onClick={() => setChecked(!checked)}
      ></div>
    </div>
  );
};

Radio.propTypes = {
  checked: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["md", "lg"]),
};

export default Radio;
