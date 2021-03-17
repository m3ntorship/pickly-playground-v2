import React from "react";
import PropTypes from "prop-types";
import className from "classnames";
import { ReactComponent as DeleteIcon } from "../../../icons/inputFocus.svg";
import { ReactComponent as ErrorIcon } from "../../../icons/inputError.svg";
import { ReactComponent as SuccessIcon } from "../../../icons/inputSuccess.svg";
import { ReactComponent as ArrowDownIcon } from "../../../icons/inputArrowDown.svg";
import { ReactComponent as HomeIcon } from "../../../icons/inputHome.svg";
import "./TextInput.css";

export const TextInput = ({
  label,
  id,
  inputStatus,
  inputType,
  disabled,
  ...props
}) => {
  console.log(inputType);
  const inputClasses = className(
    "form-input",
    {
      error: inputStatus === "error",
      success: inputStatus === "success",
    },
    {
      "input-with-right-icon": inputType === "input-with-right-icon",
      "input-with-left-icon": inputType === "input-with-left-icon",
      "input-with-prefix": inputType === "input-with-prefix",
      "input-with-dropdown-prefix": inputType === "input-with-dropdown-prefix",
    }
  );
  const inputId = id.trim().split(" ").join("");

  return (
    <div className="form-group">
      {label && (
        <label htmlFor={inputId} className="form-label ">
          {label}
        </label>
      )}

      <div className="form-control ">
        <input
          className={inputClasses}
          type="text"
          id={inputId}
          disabled={disabled}
          {...props}
        />
        <span className="status-icon">
          {!inputStatus && <DeleteIcon />}
          {inputStatus === "error" && <ErrorIcon />}
          {inputStatus === "success" && <SuccessIcon />}
        </span>
        <span className="control-icon">
          {inputType === "input-with-right-icon" && <ArrowDownIcon />}
          {inputType === "input-with-left-icon" && <HomeIcon />}
          {inputType === "input-with-prefix" && "+20"}
          {inputType === "input-with-dropdown-prefix" && (
            <select
              className="bg-transparent focus:outline-none"
              disabled={disabled}
            >
              <option value="+20">+20</option>
              <option value="+50">+50</option>
            </select>
          )}
        </span>
      </div>
    </div>
  );
};

TextInput.propTypes = {
  inputStatus: PropTypes.oneOf(["", "error", "success"]),
  inputType: PropTypes.oneOf([
    "",
    "input-with-right-icon",
    "input-with-left-icon",
    "input-with-prefix",
    "input-with-dropdown-prefix",
  ]),
  label: PropTypes.string,
  id: PropTypes.string,
};

TextInput.defaultProps = {
  inputStatus: "",
  label: "",
  id: "",
  inputType: "",
};
