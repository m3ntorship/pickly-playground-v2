import React from "react";
import PropTypes from "prop-types";
import className from "classnames";
import avaAnon from "../../../img/large-anan.png";
import avaNotFilled from "../../../img/large-notfilled.png";
import "./Avatar.css";

export const Avatar = ({ avaSize, avaType, avaUrl, ...props }) => {
  const avatarClasses = className("avatar", {
    large: avaSize === "large",
    medium: avaSize === "medium",
    small: avaSize === "small",
  });
  const avatarImage = className({
    [avaAnon]: avaType === "anonymous",
    [avaNotFilled]:
      avaType === "not-filled" || (!avaUrl && avaType === "filled"),
    [avaUrl]: avaUrl && avaType === "filled",
  });
  return (
    <figure className={avatarClasses}>
      <img src={avatarImage} alt="avatar" className="avatar-img" {...props} />
    </figure>
  );
};
Avatar.propTypes = {
  avaSize: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  avaType: PropTypes.oneOf(["anonymous", "not-filled", "filled"]).isRequired,
  avaUrl: PropTypes.string,
};

Avatar.defaultProps = {
  avaSize: "large",
  avaType: "not-filled",
};
