import React from "react";
import PropTypes from "prop-types";
import className from "classnames";
import "./CheckBox.css";

export const CheckBox = ({ id, checkBoxSize, ...props }) => {
  const inputId = id.trim().split(" ").join("");

  const CkeckBoxClasses = className("checkbox", {
    small: checkBoxSize === "small",
  });
  return (
    <div className={CkeckBoxClasses}>
      <input
        type="checkbox"
        id={inputId}
        className="checkbox-input"
        {...props}
      />
      <label htmlFor={inputId} className="check-box">
        <div className="check-mark">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66632 10.3907L4.47099 8.19539L3.52832 9.13806L6.66632 12.2761L13.1377 5.80473L12.195 4.86206L6.66632 10.3907Z"
              fill="white"
            />
          </svg>
        </div>
      </label>
    </div>
  );
};

CheckBox.propTypes = {
  id: PropTypes.string,
  checkBoxSize: PropTypes.oneOf(["", "small"]),
};
CheckBox.defaultProps = {
  id: "",
  checkBoxSize: "",
};
