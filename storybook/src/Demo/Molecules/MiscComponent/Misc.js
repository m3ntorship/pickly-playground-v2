import React from "react";
import PropTypes from "prop-types";

const Misc = (props) => {
  const { variants = "success" } = props;
  return (
    <>
      {variants === "error" ? (
        <div className="misc-box flex flex-col items-center">
          <svg
            className="mb-xxl"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.8432 6.66666C21.5498 6.66666 6.6665 21.62 6.6665 40C6.6665 58.38 21.6198 73.3333 39.9998 73.3333C58.3798 73.3333 73.3332 58.38 73.3332 40C73.3332 21.62 58.3098 6.66666 39.8432 6.66666ZM39.9998 66.6667C25.2965 66.6667 13.3332 54.7033 13.3332 40C13.3332 25.2967 25.2232 13.3333 39.8432 13.3333C54.6365 13.3333 66.6665 25.2967 66.6665 40C66.6665 54.7033 54.7032 66.6667 39.9998 66.6667Z"
              fill="#FE544A"
            ></path>
            <path
              d="M36.6665 23.3333H43.3332V46.6667H36.6665V23.3333ZM36.6665 50H43.3332V56.6667H36.6665V50Z"
              fill="#FE544A"
            ></path>
          </svg>
          <h1 className="mb-xs text-lg font-bold text-error">
            Image couldn’t be uploaded!
          </h1>
          <span className="text-md font-normal text-error">
            Max size is 2 MB
          </span>
        </div>
      ) : (
        <div className="misc-box flex flex-col items-center">
          <svg
            className="mb-xxl"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.3336 51.9533L22.3569 40.9767L17.6436 45.69L33.3336 61.38L65.6902 29.0233L60.9769 24.31L33.3336 51.9533Z"
              fill="#07B255"
            ></path>
          </svg>

          <h1 className="mb-xs text-lg font-bold text-dark-grey">
            Congratulations!
          </h1>
          <span className="text-md font-normal text-grey">Subtext</span>
        </div>
      )}
    </>
  );
};

Misc.propTypes = {
  variants: PropTypes.oneOf(["success", "error"]),
};

export default Misc;
