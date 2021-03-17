import React from "react";
import PropTypes from "prop-types";
import className from "classnames";
import "./Radio.css";

export const Radio = ({ id, radioSize, ...props }) => {
  const inputId = id.trim().split(" ").join("");

  const RadioClasses = className("radio-button", {
    small: radioSize === "small",
  });
  return (
    <div className={RadioClasses}>
      <input type="radio" id={inputId} className="radio-input" {...props} />
      <label htmlFor={inputId} className="radio-btn">
        <div className="circle-mark"></div>
      </label>
    </div>
  );
};

Radio.propTypes = {
  id: PropTypes.string,
  radioSize: PropTypes.oneOf(["", "small"]),
};
Radio.defaultProps = {
  id: "",
  radioSize: "",
};
