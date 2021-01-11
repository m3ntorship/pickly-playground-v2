import React from "react";
import renderer from "react-test-renderer";
import PrimaryButtonLG from "./PrimaryButtonLG";

describe("render my primary button", () => {
  it("render primary button comp large size", () => {
    const tree = renderer.create(<PrimaryButtonLG />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
