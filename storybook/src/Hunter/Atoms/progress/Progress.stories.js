import React from "react";
import { Progress, PROGRESS } from "./Progress";

export default {
  title: "Hunter/Atom/Progress",
  component: Progress,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: [PROGRESS.TYPE.HORIZONTAL, PROGRESS.TYPE.VERTICAL],
      },
    },
    range: {
      control: {
        type: "range",
        min: PROGRESS.RANGE.MIN,
        max: PROGRESS.RANGE.MAX,
        step: PROGRESS.RANGE.STEP,
      },
    },
    color: {
      control: {
        type: "color",
      },
    },
  },
};

const Template = (args) => <Progress {...args} />;
export const progress = Template.bind({});
progress.args = {
  type: PROGRESS.TYPE.HORIZONTAL,
  range: PROGRESS.RANGE.MIN,
};
