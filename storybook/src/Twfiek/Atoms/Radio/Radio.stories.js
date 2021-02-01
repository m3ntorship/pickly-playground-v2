import React from "react";
import Radio from "./Radio";

const defaultExport = {
  title: "Twfiek/Atoms/Radio",
  component: Radio,
};

export default defaultExport;

const Template = (args) => <Radio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};
