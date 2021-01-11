import React from "react";
import renderer from "react-test-renderer";
import StaticInput from "./StaticInput";

describe("Label Input field", () => {
  it("renders a marked input field with icon or prefix ", () => {
    const tree = renderer.create(<StaticInput status="error" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
