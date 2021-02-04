import React from "react";
import PostEdit from "./PostEdit";

const defaultExport = {
  title: "Twfiek/Organisms/PostEdit",
  component: PostEdit,
};

export default defaultExport;

const Template = (args) => <PostEdit {...args} />;

export const Default = Template.bind({});
// Default.args = {
//   variant: "filled",
//   size: "lg",
// };
