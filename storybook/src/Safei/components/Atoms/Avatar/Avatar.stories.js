import React from "react";
import Avatar from "./Avatar";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
  //decorators: [story => <Center>{story()}</Center>]
};

const Template = (args) => <Avatar {...args} />;
export const MainAvatar = Template.bind({});
MainAvatar.args = {
  //size: "lg",
};
