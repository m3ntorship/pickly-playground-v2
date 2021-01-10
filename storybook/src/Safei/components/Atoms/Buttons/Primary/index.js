import React from "react";
import cn from "classnames";
export const BUTTON_OPTIONS = {
  SIZE: {
    SMALL: "small",
    MEDIUM: "medium",
    BIG: "big",
  },
};
export const Button = ({ children, primary, size }) => {
  return (
    <div>
      <button
        type="button"
        className={cn(
          primary
            ? "text-white bg-primary rounded-full hover:bg-primary-shd8 focus:ring-2 focus:ring-primary-shd9 focus:outline-none mr-4"
            : "text-primary  bg-white  border-2 border-primary rounded-full  focus:ring-2 focus:ring-primary-shd9 focus:outline-none mr-4",
          { "py-4 px-8 font-bold text-md": size === BUTTON_OPTIONS.SIZE.BIG },
          {
            "py-2 px-6 text-base font-medium":
              size === BUTTON_OPTIONS.SIZE.MEDIUM,
          },

          {
            "py-1 px-4 font-medium text-sm": size === BUTTON_OPTIONS.SIZE.SMALL,
          }
        )}
      >
        {children}
      </button>
      <button
        type="button"
        className={cn(
          primary
            ? "text-white bg-primary rounded-full focus:ring-2 focus:ring-primary-shd9 focus:outline-none disabled:opacity-25 mr -4"
            : " text-primary bg-white  border border-primary rounded-full  focus:ring-2 focus:ring-primary-shd9 focus:outline-none mr-4 disabled:opacity-25",
          { "py-4 px-8 font-bold text-md": size === BUTTON_OPTIONS.SIZE.BIG },
          {
            "py-2 px-6 text-base font-medium":
              size === BUTTON_OPTIONS.SIZE.MEDIUM,
          },

          {
            "py-1 px-4 font-medium text-sm": size === BUTTON_OPTIONS.SIZE.SMALL,
          }
        )}
        disabled
      >
        {children}
      </button>
    </div>
  );
};
