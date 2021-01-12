import React from "react";
import PostingBar from "./PostingBar";

export default {
  title: "Mollecules/PostingBar",
  component: PostingBar,
};

const Template = (args) => <PostingBar {...args} />;
export const _PostingBar = Template.bind({});
_PostingBar.args = {
  //   status: "error",
  // prefix: '+20',
  // direction: 'flex-row'
};
