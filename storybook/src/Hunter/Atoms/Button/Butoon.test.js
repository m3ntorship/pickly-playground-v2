import React from "react";
import renderer from "react-test-renderer";
import Button from "./Button";

describe("Button component", () => {
  it("should render (primary-large) button when we apply nothing", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (large) button when we apply (large)", () => {
    const tree = renderer.create(<Button size="large" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (meduim) button when we apply (meduim)", () => {
    const tree = renderer.create(<Button size="meduim" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (small) button when we apply (small)", () => {
    const tree = renderer.create(<Button size="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (primary) button when we apply primary", () => {
    const tree = renderer.create(<Button type="primary" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (secondery) button when we apply (secondery)", () => {
    const tree = renderer.create(<Button type="secondery" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (text) button when we apply text", () => {
    const tree = renderer.create(<Button type="text" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (disapled) button when we apply disapled", () => {
    const tree = renderer.create(<Button disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (righticon) button when we apply righticon", () => {
    const tree = renderer.create(<Button righticon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (lefticon) button when we apply lefticon", () => {
    const tree = renderer.create(<Button lefticon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (onlyicon)  button when we apply nothing", () => {
    const tree = renderer.create(<Button onlyicon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
