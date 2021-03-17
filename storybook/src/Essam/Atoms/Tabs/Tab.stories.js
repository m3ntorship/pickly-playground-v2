import React from "react";
import { Tab } from "./Tab";

export default {
  title: "Essam/Atoms/Tabs",
  component: Tab,
};

const Template = (args) => <Tab {...args} />;

export const TabBtn = Template.bind({});
TabBtn.args = {
  disabled: false,
  id: "Tab",
  label: "label",
  tabType: "",
};
