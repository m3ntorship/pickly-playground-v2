import React from "react";
import { CheckBox } from "./CheckBox";

export default {
  title: "Essam/Atoms/CheckBox",
  component: CheckBox,
};

const Template = (args) => <CheckBox {...args} />;

export const CheckBoxBtn = Template.bind({});
CheckBoxBtn.args = {
  disabled: false,
  id: "CheckBox",
  checkBoxSize: "",
};
