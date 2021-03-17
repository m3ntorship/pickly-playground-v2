import React from "react";
import { General } from "./General";
import avaImg from "../../../img/large-avatar.png";

export default {
  title: "Essam/Organisms/General",
  component: General,
};

const Template = (args) => <General {...args} />;
export const GeneralSection = Template.bind({});
GeneralSection.args = {
  avaSize: "medium",
  avaType: "filled",
  avaUrl: avaImg,
  inputType: "",
  inputStatus: "",
};
