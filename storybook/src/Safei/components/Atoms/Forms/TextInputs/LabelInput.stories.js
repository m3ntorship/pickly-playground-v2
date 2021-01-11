import React from "react";
import "../../../../css/index.css";
import LabelInput from "./LabelInput";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Atoms/TextInputs/LabelInput",
  component: LabelInput,
  argTypes: {
    status: {
      control: {
        type: "select",
        options: ["normal", "error", "success"],
      },
    },
  },
};

const Template = (args) => (
  <LabelInput {...args} disabled={boolean("Disabled", false)} />
);
export const Input = Template.bind({});
Input.args = {
  status: "error",
  // prefix: '+20',
  // direction: 'flex-row'
};
