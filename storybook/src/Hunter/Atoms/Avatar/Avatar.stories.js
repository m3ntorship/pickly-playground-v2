import React from "react";
import Avatar from "./Avatar";

export default {
  title: "Hunter/Atom/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["large", "medium", "small"],
      },
    },
    type: {
      control: {
        type: "radio",
        options: ["person", "anon", "notfilled"],
      },
    },
  },
};

const Template = (args) => <Avatar {...args} />;

export const avatar = Template.bind({});
avatar.args = {
  size: "large",
  type: "person",
};
