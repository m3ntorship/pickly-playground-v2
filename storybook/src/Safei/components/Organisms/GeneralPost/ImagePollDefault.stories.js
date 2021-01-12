import React from "react";
import ImagePollDefault from "./ImagePollDefault";

export default {
  title: "Organisms/ImagePollDefault",
  component: ImagePollDefault,
  //decorators: [story => <Center>{story()}</Center>]
};

const Template = (args) => <ImagePollDefault {...args} />;
export const _ImagePollDefault = Template.bind({});
_ImagePollDefault.args = {
  //   disabled: false,
  //   size: "lg",
};
