import React from "react";
import Radio from "./Radio";

export default {
  title: "Hunter/Atom/Radio",
  component: Radio,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["default", "small"],
      },
    },
  },
};

const Template = (args) => <Radio {...args} />;

export const radio = Template.bind({});
radio.args = {
  size: "default",
  disabled: false,
};
