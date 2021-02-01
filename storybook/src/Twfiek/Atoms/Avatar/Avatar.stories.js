import React from "react";
import Avatar from "./Avatar";

const defaultExport = {
  title: "Twfiek/Atoms/Avatar",
  component: Avatar,
};

export default defaultExport;

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "filled",
  size: "lg",
};
