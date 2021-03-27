import React from "react";
import renderer from "react-test-renderer";
import Avatar from "./Avatar";

describe("Avatar Component", () => {
  it("should render (person-large)  when we apply nothing ", () => {
    const tree = renderer.create(<Avatar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (person) when we apply (person) ", () => {
    const tree = renderer.create(<Avatar type="person" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (anon) when we apply (anon)", () => {
    const tree = renderer.create(<Avatar type="anon" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (notfilled)  when we apply (notfilled) ", () => {
    const tree = renderer.create(<Avatar type="notfilled" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (meduim) when we apply (meduim) ", () => {
    const tree = renderer.create(<Avatar size="meduim" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (small) when we apply (small) ", () => {
    const tree = renderer.create(<Avatar size="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (large) when we apply (large) ", () => {
    const tree = renderer.create(<Avatar size="large" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
