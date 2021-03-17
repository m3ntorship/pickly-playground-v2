import React from "react";
import { ImagePoll } from "./ImagePoll";
import avaImg from "../../../img/large-avatar.png";

export default {
  title: "Essam/Organisms/ImagePoll",
  component: ImagePoll,
};

const Template = (args) => <ImagePoll {...args} />;
export const ImagePollSection = Template.bind({});
ImagePollSection.args = {
  avaSize: "medium",
  avaType: "filled",
  avaUrl: avaImg,
};
