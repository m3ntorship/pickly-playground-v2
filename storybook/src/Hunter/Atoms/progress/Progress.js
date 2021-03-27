import React from "react";
import PropTypes from "prop-types";

export const PROGRESS = {
  TYPE: {
    HORIZONTAL: "Horizontal",
    VERTICAL: "Vertical",
  },
  RANGE: {
    MIN: 0,
    MAX: 30,
    STEP: 1,
  },
};

export const Progress = ({ disabled, range, type }) => {
  const direction =
    type === PROGRESS.TYPE.HORIZONTAL
      ? `h-0.5 w-${range}`
      : type === PROGRESS.TYPE.VERTICAL
      ? `w-1 h-${range}`
      : "";
  const color =
    range < PROGRESS.RANGE.MAX / 3
      ? "bg-error "
      : range < PROGRESS.RANGE.MAX
      ? "bg-primary "
      : "bg-success";

  return (
    <>
      <div
        className={`rounded-full
          ${direction} 
          ${color}
          ${disabled && "opacity-25"}
          `}
      ></div>
    </>
  );
};
Progress.propTypes = {
  type: PropTypes.oneOf(["Horizontal", "Vertical"]),
  range: PropTypes.number,
  color: PropTypes.string,
};

export default Progress;
