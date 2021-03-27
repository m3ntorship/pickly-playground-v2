import React from "react";
import { data } from "./Data";
import TabGroup from "./TabGroub";

export default {
  title: "Hunter/Atom/TabGroup",
  component: TabGroup,
  argTypes: {
    icon: {
      control: {
        type: "radio",
        options: ["image poll", "text poll", "One more poll type"],
      },
    },
  },
};

const Template = (args) => <TabGroup {...args} />;

export const tabgroup = Template.bind({});
tabgroup.args = {
  content: "image poll",
  icon: data[0].icon,
};
