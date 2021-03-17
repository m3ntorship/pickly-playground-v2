import React from "react";
import { TextInput } from "./TextInput";

export default {
  title: "Essam/Atoms/TextInput",
  component: TextInput,
};

const Template = (args) => <TextInput {...args}></TextInput>;

export const DefaultTextInput = Template.bind({});

DefaultTextInput.args = {
  label: "label",
  id: "my label",
  inputType: "",
  inputStatus: "",
  disabled: false,
  placeholder: "Enter Text",
};
