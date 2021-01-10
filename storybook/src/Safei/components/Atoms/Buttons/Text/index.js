import React from "react";
import cn from "classnames";
export const BUTTON_OPTIONS = {
  SIZE: {
    SMALL: "small",
    MEDIUM: "medium",
    BIG: "big",
  },
};
export const Button = ({ children, size }) => {
  return (
    <div>
      <button
        type="button"
        className={cn(
          "text-accent hover:text-accent-shd2 focus:outline-none focus:underline mr-4",
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
          "text-accent focus:outline-none disabled:opacity-25",
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
