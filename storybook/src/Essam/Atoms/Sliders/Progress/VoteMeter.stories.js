import React from "react";
import { VoteMeter } from "./VoteMeter";

export default {
  title: "Essam/Atoms/Sliders/VoteMeter",
  component: VoteMeter,
  argTypes: {
    value: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
};

const Template = (args) => <VoteMeter {...args} />;

export const VoteMeterBar = Template.bind({});
VoteMeterBar.args = {
  value: 90,
};
