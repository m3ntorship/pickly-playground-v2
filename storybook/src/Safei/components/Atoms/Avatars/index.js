import React from "react";
import Anonymous from "./anonymous.svg";
import cn from "classnames";
export const AVATAR_OPTIONS = {
  SIZE: {
    SMALL: "small",
    MEDIUM: "medium",
    BIG: "big",
  },
};

export const Avatar = ({ anonymous, size }) => {
  return (
    <img
      src={anonymous ? Anonymous : "https://source.unsplash.com/random"}
      alt="Profile Picture"
      className={cn(
        "rounded-full object-cover",
        { "w-14 h-14": size === AVATAR_OPTIONS.SIZE.BIG },
        {
          "w-10 h-10": size === AVATAR_OPTIONS.SIZE.MEDIUM,
        },

        {
          "w-8 h-8": size === AVATAR_OPTIONS.SIZE.SMALL,
        }
      )}
    />
  );
};
