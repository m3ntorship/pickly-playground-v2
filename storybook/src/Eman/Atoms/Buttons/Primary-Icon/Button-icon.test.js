import React from "react";
import renderer from "react-test-renderer";
import { ButtonIcon } from "./Button-icon";

describe("Testing ButtonIcon", () => {
  it("Testing ButtonIcon size big", () => {
    const tree = renderer.create(<ButtonIcon size="big" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing ButtonIcon size medium", () => {
    const tree = renderer.create(<ButtonIcon size="medium" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing ButtonIcon size small", () => {
    const tree = renderer.create(<ButtonIcon size="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing ButtonIcon iconPosition", () => {
    const tree = renderer.create(<ButtonIcon iconPosition="left" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing ButtonIcon iconPosition", () => {
    const tree = renderer.create(<ButtonIcon iconPosition="right" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Testing ButtonIcon with no props", () => {
    const tree = renderer.create(<ButtonIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
