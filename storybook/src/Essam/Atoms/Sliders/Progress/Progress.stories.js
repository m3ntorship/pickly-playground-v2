import React from "react";
import { Progress } from "./Progress";

export default {
  title: "Essam/Atoms/Sliders/Progress",
  component: Progress,
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

const Template = (args) => <Progress {...args} />;

export const progressBar = Template.bind({});
progressBar.args = {
  value: 10,
  min: 0,
  max: 100,
};
