import React from "react";
import Misc from "./Misc";

const defaultExport = {
  title: "Twfiek/Molecules/Misc",
  component: Misc,
};

export default defaultExport;

const Template = (args) => <Misc {...args} />;

export const Default = Template.bind({});
Default.args = {
  variants: "success",
};
