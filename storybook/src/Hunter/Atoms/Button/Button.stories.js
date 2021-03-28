import React from "react";
import Button from "./Button";

export default {
  title: "Hunter/Atom/Button",
  component: Button,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["large", "medium", "small"],
      },
    },
    type: {
      control: {
        type: "radio",
        options: ["primary", "secondary", "text"],
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
  type: "primary",
  size: "large",
  content: "button",
  disabled: false,
  righticon: false,
  lefticon: false,
  onlyicon: false,
};
