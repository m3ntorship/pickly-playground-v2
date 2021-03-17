import React from "react";
import PropTypes from "prop-types";
import "./Progress.css";

export const Progress = ({ value, max, min, ...props }) => {
  return (
    <progress className="progress" value={value} min={min} max={max} {...props}>
      50/100
    </progress>
  );
};

Progress.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
};

Progress.defaultProps = {
  value: 0,
  min: 0,
  max: 0,
};
