import React from "react";
import PollTab from "../../Atoms/Tabs/PollTab";

const PollTabs = () => {
  return (
    <div className="flex flex-row">
      <div style={{ marginRight: "22px" }}>
        <PollTab />
      </div>
      <div style={{ marginRight: "22px" }}>
        <PollTab />
      </div>
      <div style={{ marginRight: "22px" }}>
        <PollTab />
      </div>
    </div>
  );
};

export default PollTabs;
