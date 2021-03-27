import React from "react";
import renderer from "react-test-renderer";
import Radio from "./Radio";

describe("Radio component", () => {
  it("should render (default-unchecked) Radio when we apply nothing", () => {
    const tree = renderer.create(<Radio />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (disabled) Radio when we apply disabled", () => {
    const tree = renderer.create(<Radio disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (small) Radio when we apply small", () => {
    const tree = renderer.create(<Radio size="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  // it ("should render (checked) Radio when we apply checked", ()=>{\
  //     const tree = renderer.create(<Radio  />).toJSON();
  //     expect(tree).toMatchSnapshot();
  // });
});
