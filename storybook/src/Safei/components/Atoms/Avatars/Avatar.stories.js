import React from "react";
import { Avatar, AVATAR_OPTIONS } from "./index";

export default {
  title: "Design System/Atoms/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: [
          AVATAR_OPTIONS.SIZE.SMALL,
          AVATAR_OPTIONS.SIZE.MEDIUM,
          AVATAR_OPTIONS.SIZE.BIG,
        ],
      },
    },
  },
};

const Template = (args) => <Avatar {...args} />;
export const Profile = Template.bind({});
Profile.args = {
  anonymous: false,
  size: AVATAR_OPTIONS.SIZE.BIG,
};
