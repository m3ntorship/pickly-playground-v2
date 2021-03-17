import React from "react";
import { Radio } from "./Radio";

export default {
  title: "Essam/Atoms/Radio",
  component: Radio,
};

const Template = (args) => <Radio {...args} />;

export const RadioBtn = Template.bind({});
RadioBtn.args = {
  disabled: false,
  id: "Radio",
  radioSize: "",
};
