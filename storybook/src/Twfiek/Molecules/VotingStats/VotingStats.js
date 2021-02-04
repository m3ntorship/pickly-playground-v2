import React from "react";
import PropTypes from "prop-types";
import Progress from "../Progress/Progress";

const VotingStats = (props) => {
  const { progress } = props;
  return (
    <div className="misc-box flex items-start">
      <p className="mr-3.5">
        {progress > 70 ? "🌟" : ""}
        {progress}%
      </p>
      <Progress progress={progress} />
    </div>
  );
};

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default VotingStats;
