import React from "react";
import renderer from "react-test-renderer";
import CheckBox from "./CheckBox";

describe("checkbox component", () => {
  it("should render (default-unchecked) checkedbox when we apply nothing", () => {
    const tree = renderer.create(<CheckBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (disabled) checkedbox when we apply disabled", () => {
    const tree = renderer.create(<CheckBox disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (small) checkedbox when we apply small", () => {
    const tree = renderer.create(<CheckBox size="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  // it ("should render (checked) checkedbox when we apply cjecked", ()=>{\
  //     const tree = renderer.create(<CheckBox  />).toJSON();
  //     expect(tree).toMatchSnapshot();
  // });
});
