import React from "react";

import { Button } from "./Button";

export default {
  title: "Essam/Atoms/Buttons",
  component: Button,
};

const Template = (args) => <Button {...args}></Button>;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: "Button Text",
  btnType: "primary",
  btnSize: "large",
  withIcon: true,
  iconType: "icon-right",
  disabled: false,
};
