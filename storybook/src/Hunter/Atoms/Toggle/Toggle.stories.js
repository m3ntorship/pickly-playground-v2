import React from "react";
import { TOGGLE, Toggle } from "./Toggle";

export default {
  title: "Hunter/Atom/Toggles",
  component: Toggle,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: [TOGGLE.SIZE.DEFAULT, TOGGLE.SIZE.SMALL],
      },
    },
  },
};
const Template = (args) => <Toggle {...args} />;

export const toggle = Template.bind({});
toggle.args = {
  disabled: false,
  size: TOGGLE.SIZE.DEFAULT,
};
