import React, { useState } from "react";
import PropTypes from "prop-types";
import { data } from "./Data";
import Radio from "../Radio/Radio";

const TabGroub = ({ content, icon }) => {
  // this is for the overall div  activation
  const [active, setActive] = useState(false);

  //   this is the click function
  const handleClick = () => {
    setActive(!active);
  };

  const iconImage =
    icon === "image poll"
      ? data[0].icon
      : icon === "text poll"
      ? data[1].icon
      : icon === "One more poll type"
      ? data[2].icon
      : "";

  return (
    <div
      className={`cursor-pointer mr-4 flex items-center  py-1.5 px-3.5 rounded-full w-32
          ${
            active ? "bg-transparent bg-white border border-grey" : "bg-grey-bg"
          }`}
      onClick={handleClick}
    >
      <Radio />
      <span>{iconImage}</span>
      <p className="text-sm font-medium text-dark-grey">{content}</p>
    </div>
  );
};

TabGroub.PropTypes = {
  content: PropTypes.string,
  icon: PropTypes.oneOf(["image poll", "text poll", "One more poll type", ""]),
};

export default TabGroub;
