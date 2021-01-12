import React from "react";
import { Choices, INPUT } from "./Choices";

export default {
  title: "Eman/Atoms/Inputs",
  component: Choices,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: [
          INPUT.STATUS.DEFAULT,
          INPUT.STATUS.ERROR,
          INPUT.STATUS.SUCCESS,
          INPUT.STATUS.DISABLED,
        ],
      },
    },
  },
};

const Template = (args) => <Choices {...args} />;

export const choices = Template.bind({});
choices.args = {
  label: "Label",
  type: INPUT.STATUS.DEFAULT,
  placeholder: "Enter Text",
};
