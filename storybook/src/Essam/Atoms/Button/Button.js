import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as ArrowDown } from "../../icons/arrowDown.svg";
import "./Button.css";

export const Button = ({ btnType, btnSize, withIcon, iconType, ...props }) => {
  const btnClasses = classNames(
    "btn",
    {
      "btn-primary": btnType === "primary",
      "btn-secondary": btnType === "secondary",
      "btn-text": btnType === "text",
    },
    {
      "btn-large": btnSize === "large",
      "btn-medium": btnSize === "medium",
      "btn-small": btnSize === "small",
    },
    { "btn-rounded": withIcon && iconType === "icon-only" }
  );

  return (
    <button className={btnClasses} type="button" {...props}>
      {withIcon && iconType === "icon-left" ? (
        <span className="-ml-xs mr-xs">
          <ArrowDown />
        </span>
      ) : null}

      {(btnType === "primary" || btnType === "secondary") &&
      withIcon &&
      iconType === "icon-only" ? (
        <span>
          <ArrowDown />
        </span>
      ) : (
        props.children
      )}
      {withIcon && iconType === "icon-right" ? (
        <span className="-mr-xs ml-xs">
          <ArrowDown />
        </span>
      ) : null}
    </button>
  );
};

Button.propTypes = {
  btnType: PropTypes.oneOf(["primary", "secondary", "text"]),
  btnSize: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  withIcon: PropTypes.bool,
  iconType: PropTypes.oneOf(["icon-right", "icon-left", "icon-only"]),
};

Button.defaultProps = {
  btnType: "primary",
  btnSize: "large",
  disabled: false,
  withIcon: false,
  iconType: "",
};
