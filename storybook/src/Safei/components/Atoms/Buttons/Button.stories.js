import React from "react";
import Button from "./Button";

export default {
  title: "Atoms/Buttons/SmallButton",
  component: Button,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args) => <Button {...args} />;
export const SmallButton = Template.bind({});
SmallButton.args = {
  disabled: false,
  // size: "lg",
};
