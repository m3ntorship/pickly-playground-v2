import React from "react";
import PollTab from "../../Atoms/Tabs/PollTab";

const PollTabs = ({ count }) => {
  const tabsArr = [];
  if (!count) count = 1; //set default value;
  tabsArr.length = count;
  tabsArr.fill(<PollTab />);
  return (
    <div className="inline-block">
      <div className="flex flex-row">{tabsArr}</div>
    </div>
  );
};

export default PollTabs;
