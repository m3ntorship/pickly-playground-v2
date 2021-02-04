import React from "react";
import VotingStats from "./VotingStats";

const defaultExport = {
  title: "Twfiek/Molecules/VotingStats",
  component: VotingStats,
  argTypes: {
    progress: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 2,
      },
    },
  },
};

export default defaultExport;

const Template = (args) => <VotingStats {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  progress: 20,
};
