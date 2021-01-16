import React from "react";
import PropTypes from "prop-types";

const Image = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.99951 7.33334C5.5518 7.33334 5.99951 6.88562 5.99951 6.33334C5.99951 5.78105 5.5518 5.33334 4.99951 5.33334C4.44723 5.33334 3.99951 5.78105 3.99951 6.33334C3.99951 6.88562 4.44723 7.33334 4.99951 7.33334Z"
        fill="#5B6366"
      />
      <path
        d="M6.99951 9.33333L5.99951 8L3.99951 10.6667H5.99951H7.99951H11.9995L8.99951 6.66666L6.99951 9.33333Z"
        fill="#5B6366"
      />
      <path
        d="M13.3325 2.66666H2.66585C1.93052 2.66666 1.33252 3.26466 1.33252 4V12C1.33252 12.7353 1.93052 13.3333 2.66585 13.3333H13.3325C14.0679 13.3333 14.6659 12.7353 14.6659 12V4C14.6659 3.26466 14.0679 2.66666 13.3325 2.66666ZM2.66585 12V4H13.3325L13.3339 12H2.66585Z"
        fill="#5B6366"
      />
    </svg>
  );
};
export default Image;

Image.propTypes = {
  className: PropTypes.string,
};