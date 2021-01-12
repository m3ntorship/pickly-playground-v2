import React from "react";
import UploadButton from "./UploadButton";

export default {
  title: "Atoms/Buttons/UploadButton",
  component: UploadButton,
  //decorators: [story => <Center>{story()}</Center>]
};

const Template = (args) => <UploadButton {...args} />;
export const Upload = Template.bind({});
Upload.args = {
  //   disabled: false,
  //   size: "lg",
};
