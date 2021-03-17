import React, { useEffect } from "react";
import className from "classnames";
import "./Progress.css";

export const VoteMeter = ({ value }) => {
  const meterClasses = className("progress", {
    "vote-meter-4": value >= 50,
    "vote-meter-5": value < 50,
  });
  const meterRef = React.createRef();
  useEffect(() => {
    console.log(meterRef);
    let radius = meterRef.current.r.baseVal.value;
    console.log("radius", radius);
    let circumference = radius * 2 * Math.PI;
    meterRef.current.style.strokeDasharray = circumference;
    const setProgress = (percent) => {
      meterRef.current.style.strokeDashoffset =
        circumference - (percent / 100) * circumference;
      console.log(meterRef.current.style.strokeDashoffset);
    };
    setProgress(value);
  });
  return (
    <svg className={meterClasses}>
      <circle
        ref={meterRef}
        r="31"
        cx="36"
        cy="36"
        className="progress-value"
      ></circle>
    </svg>
  );
};
