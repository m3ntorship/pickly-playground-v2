import React from "react";
import renderer from "react-test-renderer";
import LabelInput from "./LabelInput";

describe("Label Input field", () => {
  it("renders a marked input field with icon or prefix ", () => {
    const tree = renderer.create(<LabelInput status="normal" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
