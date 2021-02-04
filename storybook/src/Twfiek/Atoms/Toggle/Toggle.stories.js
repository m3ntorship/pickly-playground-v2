import React from "react";
import Toggle from "./Toggle";

const defaultExport = {
  title: "Twfiek/Atoms/Toggle",
  component: Toggle,
};

export default defaultExport;

const Template = (args) => <Toggle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};
