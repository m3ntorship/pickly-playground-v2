import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Hunter/Atom/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["default", "small"],
      },
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const checkbox = Template.bind({});
checkbox.args = {
  size: "default",
  disabled: false,
};
