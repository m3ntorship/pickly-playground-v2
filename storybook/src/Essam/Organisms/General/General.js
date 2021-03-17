import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "../../Atoms/Avatar/Avatar";
import { TextInput } from "../../Atoms/Forms/TextInputs/TextInput";
import "./General.css";

export const General = ({
  avaSize,
  avaType,
  avaUrl,
  inputType,
  inputStatus,
}) => {
  return (
    <div className="general-section">
      <Avatar avaSize={avaSize} avaType={avaType} avaUrl={avaUrl} />
      <TextInput
        placeholder="What do you want to ask about?"
        inputStatus={inputStatus}
        inputType={inputType}
      />
    </div>
  );
};

General.propTypes = {
  inputStatus: PropTypes.oneOf(["", "error", "success"]),
  inputType: PropTypes.oneOf([
    "",
    "input-with-right-icon",
    "input-with-left-icon",
    "input-with-prefix",
    "input-with-dropdown-prefix",
  ]),
};
