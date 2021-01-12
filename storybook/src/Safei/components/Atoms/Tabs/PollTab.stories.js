import React from "react";
import PollTab from "./PollTab";

export default {
  title: "Atoms/PollTab",
  component: PollTab,
};

const Template = (args) => <PollTab {...args} />;
export const PollTabDisplay = Template.bind({});
PollTabDisplay.args = {
  //   status: "error",
  // prefix: '+20',
  // direction: 'flex-row'
};
