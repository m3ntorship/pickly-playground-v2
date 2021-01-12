import React from "react";
import PollTabs from "./PollTabs";

export default {
  title: "Mollecules/PollTabs",
  component: PollTabs,
};

const Template = (args) => <PollTabs {...args} />;
export const PollTabsDisplay = Template.bind({});
//could add number of tabs as prop
PollTabsDisplay.args = {
  //   status: "error",
  // prefix: '+20',
  // direction: 'flex-row'
};
