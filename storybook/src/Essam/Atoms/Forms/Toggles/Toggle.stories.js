import React from "react";
import { Toggle } from "./Toggle";

export default {
  title: "Essam/Atoms/Toggle",
  component: Toggle,
};

const Template = (args) => <Toggle {...args} />;

export const ToggleBtn = Template.bind({});
ToggleBtn.args = {
  disabled: false,
  id: "Toggle",
  toggleSize: "",
};
