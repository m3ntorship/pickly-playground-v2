import React from "react";
import { Label, INPUT } from "./Label";

export default {
  title: "Hunter/Atom/Label",
  component: Label,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: [
          INPUT.STATUS.DEFAULT,
          INPUT.STATUS.ERROR,
          INPUT.STATUS.SUCCESS,
        ],
      },
    },
  },
};

const Template = (args) => <Label {...args} />;

export const primaryLabel = Template.bind({});
primaryLabel.args = {
  label: "Label",
  type: INPUT.STATUS.DEFAULT,
  placeholder: "Enter Text",
  disabled: false,
  icon: "",
  prefix: "",
};
