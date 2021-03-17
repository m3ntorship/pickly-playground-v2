import React from "react";
import PropTypes from "prop-types";
import className from "classnames";
import { ReactComponent as ImgTabIcon } from "../../icons/imgTab.svg";
import "./Tab.css";

export const Tab = ({ tabType, id, label, ...props }) => {
  const TabId = id.trim().split(" ").join("");

  const TabClasses = className(
    "tab",
    { disabled: props.disabled },
    { "tab-without-icon": tabType === "tab-without-icon" }
  );
  return (
    <div className={TabClasses}>
      <input type="radio" className="tab-radio-input" id={TabId} {...props} />
      <label htmlFor={TabId} className="tab-radio-label">
        <span className="tab-radio-icon">
          {!(tabType === "tab-without-icon") && <ImgTabIcon />}
        </span>
        {label}
      </label>
    </div>
  );
};

Tab.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  tabType: PropTypes.oneOf(["", "tab-without-icon"]),
};

Tab.defaultProps = {
  id: "",
  label: "",
  tabType: "",
};
