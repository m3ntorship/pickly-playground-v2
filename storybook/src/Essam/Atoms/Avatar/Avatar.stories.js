import React from "react";
import { Avatar } from "./Avatar";
import avaImg from "../../../img/large-avatar.png";

export default {
  title: "Essam/Atoms/Avatars",
  component: Avatar,
};

const Template = (args) => <Avatar {...args}></Avatar>;

export const DefaultAvatar = Template.bind({});
DefaultAvatar.args = {
  avaSize: "large",
  avaType: "filled",
  avaUrl: avaImg,
};
