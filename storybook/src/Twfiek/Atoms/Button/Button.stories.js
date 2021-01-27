import React from "react";
import Button from "./Button";

const defaultExport = {
  title: "Twfiek/Atoms/Button",
  component: Button,
};

export default defaultExport;

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "lg",
  variant: "primary",
  disabled: false,
  leftIcon: false,
  rightIcon: false,
  children: "Button Text",
};
