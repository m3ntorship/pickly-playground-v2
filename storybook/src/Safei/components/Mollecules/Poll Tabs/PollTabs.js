import React from "react";
import PollTab from "../../Atoms/Tabs/PollTab";

const PollTabs = () => {
  return (
    <div className="inline-block">
      <div className="flex flex-row">
        <div style={{ marginRight: "18px" }}>
          <PollTab />
        </div>
        <div style={{ marginRight: "18px" }}>
          <PollTab />
        </div>
        <div style={{ marginRight: "18px" }}>
          <PollTab />
        </div>
      </div>
    </div>
  );
};

export default PollTabs;
