import React from "react";
import PropTypes from "prop-types";
import className from "classnames";
import "./Toggle.css";

export const Toggle = ({ id, toggleSize, ...props }) => {
  const inputId = id.trim().split(" ").join("");

  const ToggleClasses = className("toggle-button", {
    small: toggleSize === "small",
  });
  return (
    <div className={ToggleClasses}>
      <input
        type="checkbox"
        id={inputId}
        className="toggle-checkbox"
        {...props}
      />
      <label htmlFor={inputId} className="toggle-btn-body">
        <div className="toggle-btn-head w-m h-m bg-white rounded-full"></div>
      </label>
    </div>
  );
};

Toggle.propTypes = {
  id: PropTypes.string,
  toggleSize: PropTypes.oneOf(["", "small"]),
};
Toggle.defaultProps = {
  id: "",
  toggleSize: "",
};
