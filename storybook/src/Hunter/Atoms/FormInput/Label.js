import React, { useState } from "react";
import PropTypes from "prop-types";

export const INPUT = {
  STATUS: {
    DEFAULT: "Default",
    SUCCESS: "Success",
    ERROR: "Error",
  },
  ICON: {
    LEFT: "left",
    RIGHT: "right",
  },
  PREFIX: {
    WITHDROP: "withdrop",
    WITHOUTDROP: "withoutdrop",
  },
};

export const Label = ({
  label,
  type,
  placeholder,
  disabled = false,
  icon,
  prefix,
}) => {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleIconClick = () => {
    setValue("");
    setFocus(false);
  };

  const style =
    type === INPUT.STATUS.DEFAULT
      ? "hover:border-grey-shd2 border border-grey-shd5 focus:border-dark"
      : type === INPUT.STATUS.ERROR
      ? "border border-error focus:border-error"
      : type === INPUT.STATUS.SUCCESS
      ? "border border-success focus:border-success"
      : "border border-grey-shd7";

  const rightPostion = icon === INPUT.ICON.LEFT ? "right-3" : "right-10";
  const padding = icon === INPUT.ICON.LEFT ? "px-xxl" : "px-m";
  const paddingprefix =
    prefix === INPUT.PREFIX.WITHDROP
      ? "px-4xl"
      : prefix === INPUT.PREFIX.WITHOUTDROP
      ? "px-3xl"
      : "";

  return (
    <>
      <label className="block my-2 text-xs  text-dark-grey">{label}</label>
      <div
        className={`
          flex items-center w-full py-xs relative rounded-md text-sm text-grey-shd1
          ${padding}  
          ${paddingprefix}  
          ${style}
          ${
            disabled && "pointer-events-none opacity-50 border border-grey-shd5"
          }
          
          
          `}
      >
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          className="w-full focus:outline-none focus:placeholder-dark focus:text-dark disabled:opacity-50"
        />
        {type === INPUT.STATUS.ERROR && !value ? (
          <svg
            className={`absolute ${rightPostion}`}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.96883 1.33337C4.31016 1.33337 1.3335 4.32404 1.3335 8.00004C1.3335 11.676 4.32416 14.6667 8.00016 14.6667C11.6762 14.6667 14.6668 11.676 14.6668 8.00004C14.6668 4.32404 11.6622 1.33337 7.96883 1.33337ZM8.00016 13.3334C5.0595 13.3334 2.66683 10.9407 2.66683 8.00004C2.66683 5.05937 5.04483 2.66671 7.96883 2.66671C10.9275 2.66671 13.3335 5.05937 13.3335 8.00004C13.3335 10.9407 10.9408 13.3334 8.00016 13.3334Z"
              fill="#FE544A"
            />
            <path
              d="M7.3335 4.66663H8.66683V9.33329H7.3335V4.66663ZM7.3335 9.99996H8.66683V11.3333H7.3335V9.99996Z"
              fill="#FE544A"
            />
          </svg>
        ) : type === INPUT.STATUS.SUCCESS && !value ? (
          <svg
            className={`absolute ${rightPostion}`}
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.66681 6.39061L1.47148 4.19527L0.528809 5.13794L3.66681 8.27594L10.1381 1.8046L9.19547 0.861938L3.66681 6.39061Z"
              fill="#07B255"
            />
          </svg>
        ) : (
          ""
        )}
        {focus && value && (
          <svg
            className="absolute right-3 cursor-pointer"
            onClick={handleIconClick}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00016 0.333313C3.32416 0.333313 0.333496 3.32398 0.333496 6.99998C0.333496 10.676 3.32416 13.6666 7.00016 13.6666C10.6762 13.6666 13.6668 10.676 13.6668 6.99998C13.6668 3.32398 10.6762 0.333313 7.00016 0.333313ZM9.80483 8.86198L8.86216 9.80465L7.00016 7.94265L5.13816 9.80465L4.1955 8.86198L6.0575 6.99998L4.1955 5.13798L5.13816 4.19531L7.00016 6.05731L8.86216 4.19531L9.80483 5.13798L7.94283 6.99998L9.80483 8.86198Z"
              fill="#8D9A9E"
            />
          </svg>
        )}

        {icon === INPUT.ICON.RIGHT && (
          <svg
            className="absolute right-3 cursor-pointer"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.862 6.19537L7.99998 9.05737L5.13798 6.19537L4.19531 7.13804L7.99998 10.9427L11.8046 7.13804L10.862 6.19537Z"
              fill="#94ACB5"
            />
          </svg>
        )}
        {icon === INPUT.ICON.LEFT && (
          <svg
            className="absolute left-3"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.9998 8.66663H2.66647V9.99996V13.3333C2.66647 14.0686 3.26447 14.6666 3.9998 14.6666H5.9998H9.9998H11.9998C12.7351 14.6666 13.3331 14.0686 13.3331 13.3333V9.99996V8.66663H13.9998C14.2691 8.66663 14.5131 8.50396 14.6158 8.2553C14.7191 8.00596 14.6618 7.7193 14.4711 7.52863L8.47113 1.52863C8.21047 1.26796 7.78913 1.26796 7.52847 1.52863L1.52847 7.52863C1.3378 7.7193 1.28047 8.00596 1.3838 8.2553C1.48647 8.50396 1.73047 8.66663 1.9998 8.66663ZM6.66647 13.3333V9.99996H9.33313V13.3333H6.66647ZM7.9998 2.94263L11.9998 6.94263V9.99996L12.0005 13.3333H10.6665V9.99996C10.6665 9.26463 10.0685 8.66663 9.33313 8.66663H6.66647C5.93113 8.66663 5.33313 9.26463 5.33313 9.99996V13.3333H3.9998V9.99996V7.99996V6.94263L7.9998 2.94263Z"
              fill="#8D9A9E"
            />
          </svg>
        )}
        {prefix === INPUT.PREFIX.WITHDROP && (
          <div className="flex flex-row items-center absolute left-3">
            <div className=" ">
              <h3 className="font-medium text-sm leading-5 text-grey">+20</h3>
            </div>
            <div>
              <svg
                className="mx-0.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.862 6.19537L7.99998 9.05737L5.13798 6.19537L4.19531 7.13804L7.99998 10.9427L11.8046 7.13804L10.862 6.19537Z"
                  fill="#8D9A9E"
                ></path>
              </svg>
            </div>
            <div className=" mt-0.5 bg-grey-shd6 w-0.5 h-4"></div>
          </div>
        )}
        {prefix === INPUT.PREFIX.WITHOUTDROP && (
          <div className="flex flex-row items-center absolute left-3">
            <div className=" ">
              <h3 className="font-medium text-sm leading-5 text-grey">+20</h3>
            </div>

            <div className=" mt-0.5 ml-0.5 bg-grey-shd6 w-0.5 h-4"></div>
          </div>
        )}
      </div>
    </>
  );
};

Label.propTypes = {
  type: PropTypes.oneOf(["Default", "Success", "Error"]),
  icon: PropTypes.oneOf(["left", "right", ""]),
  prefix: PropTypes.oneOf(["withdrop", "withoutdrop", ""]),
  disabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
