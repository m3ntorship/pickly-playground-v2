import React from "react";
import Checkbox from "./Checkbox";

const defaultExport = {
  title: "Twfiek/Atoms/Checkbox",
  component: Checkbox,
};

export default defaultExport;

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};
