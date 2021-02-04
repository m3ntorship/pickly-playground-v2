import React from "react";
import FormInput from "./FormInput";

const defaultExport = {
  title: "Twfiek/Atoms/FormInput",
  component: FormInput,
};

export default defaultExport;

const Template = (args) => <FormInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  rightIcon: false,
  leftIcon: false,
  withLabel: true,
  disabled: false,
  prefix: false,
  prefixDrop: false,
};
