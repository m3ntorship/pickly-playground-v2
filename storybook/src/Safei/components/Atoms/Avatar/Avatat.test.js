import React from "react";
import renderer from "react-test-renderer";
import Avatar from "./Avatar";

describe("renders the avatar comp", () => {
  it("renders Avatar ", () => {
    const tree = renderer.create(<Avatar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
