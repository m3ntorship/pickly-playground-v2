import React from "react";
import PropTypes from "prop-types";
import Person from "../../../img/large-avatar.png";
import Anon from "../../../img/large-anan.png";
import NotFilled from "../../../img/large-notfilled.png";

const Avatar = ({ size, type }) => {
  const ImageSize =
    size === "large"
      ? "w-14 h-14"
      : size === "medium"
      ? "w-10 h-10"
      : "w-8 h-8";

  const ImageSrc =
    type === "person" ? Person : type === "anon" ? Anon : NotFilled;

  return (
    <img className={`ml-4 mt-4 rounded-full ${ImageSize}`} src={ImageSrc} />
  );
};

Avatar.PropTypes = {
  size: PropTypes.oneOf(["large", "medium", "small"]),
  type: PropTypes.oneOf(["person", "anon", "notfilled"]),
};

export default Avatar;
