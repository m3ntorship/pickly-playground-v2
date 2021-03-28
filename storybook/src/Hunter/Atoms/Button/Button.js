import React from "react";
import PropTypes from "prop-types";

export const button = {
  type: {
    primary: "primary",
    secondary: "secondary",
    text: "text",
  },
  size: {
    small: "small",
    medium: "medium",
    large: "large",
  },

  disabled: false,

  content: "Button",

  righticon: false,

  lefticon: false,

  onlyicon: false,
};

const Button = ({
  type = "primary",
  size = "large",
  content = "Button",
  disabled = false,
  righticon = false,
  lefticon = false,
  onlyicon = false,
}) => {
  const buttontype =
    type === button.type.primary
      ? "hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-dark-btnFocus text-white bg-primary "
      : type === button.type.secondary
      ? "text-primary bg-white border border-primary border-solid focus:ring-2  focus:ring-dark-btnFocus focus:outline-none hover:bg-grey-bg "
      : "hover:text-accent-hover focus:underline focus:outline-none text-accent  ";

  const buttonsize =
    size === button.size.large && !onlyicon
      ? "py-3.5 px-8 font-bold text-md"
      : size === button.size.medium && !onlyicon
      ? "py-2 px-6 font-semibold  text-base "
      : "py-1.5 px-4 font-semibold text-sm";

  const buttonsizelefticon =
    size === button.size.large
      ? "py-3.5 px-8 font-bold text-md"
      : size === button.size.medium
      ? "py-2 pr-6 pl-5 font-semibold  text-base "
      : "py-1.5 pl-2.5 pr-4 font-semibold text-sm";

  const buttonsizerighticon =
    size === button.size.large
      ? "py-3.5 px-8 font-bold text-md"
      : size === button.size.medium
      ? "py-2 pl-6 pr-5 font-semibold  text-base "
      : "py-1.5 pr-2.5 pl-4 font-semibold text-sm";

  const iconsize =
    size === button.size.large
      ? "w-6 h-6"
      : button.size.medium
      ? "w-4 h-4"
      : "w-4 h-4";

  const onlyiconsize =
    size === button.size.large
      ? "p-3"
      : size === button.size.medium
      ? "p-2"
      : "p-1.5";

  return (
    <>
      {/*  */}
      <button
        className={`rounded-full flex flex-row justify-between items-center
        ${buttontype}
        ${disabled && "opacity-25 cursor-default"}
        ${!onlyicon && buttonsize}
        ${onlyicon && onlyiconsize}
        ${righticon && buttonsizerighticon}
        ${lefticon && buttonsizelefticon}
        
        `}
      >
        {lefticon && (
          <svg
            className={`${iconsize} `}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokelinecap="round"
              strokelinejoin="round"
              strokewidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        )}

        {!onlyicon && (
          <p
            className={`
            ${righticon && "mr-2"}
            ${lefticon && "ml-2"}       
            `}
          >
            {content}
          </p>
        )}
        {onlyicon && (
          <svg
            className={`${iconsize}  `}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokelinecap="round"
              strokelinejoin="round"
              strokewidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        )}

        {righticon && (
          <svg
            className={`${iconsize}  `}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokelinecap="round"
              strokelinejoin="round"
              strokewidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        )}
      </button>
    </>
  );
};

Button.PropTypes = {
  type: PropTypes.oneOf([
    button.type.primary,
    button.type.secondary,
    button.type.text,
  ]),
  size: PropTypes.oneOf([
    button.size.large,
    button.size.medium,
    button.size.small,
  ]),
  disabled: PropTypes.bool,
  content: PropTypes.string,
  righticon: PropTypes.bool,
  lefticon: PropTypes.bool,
  onlyicon: PropTypes.bool,
};

export default Button;
