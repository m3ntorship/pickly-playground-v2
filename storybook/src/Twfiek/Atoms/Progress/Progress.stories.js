import React from "react";
import Progress from "./Progress";

const defaultExport = {
  title: "Twfiek/Atoms/progress",
  component: Progress,
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

const Template = (args) => <Progress {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  progress: 20,
  row: true,
  disabled: false,
};
