import React from "react";
import renderer from "react-test-renderer";
import { Label } from "./Label";
// import userEvent from "@testing-library/user-event";
// import { render, screen } from "@testing-library/react";

describe("Label component", () => {
  it("should render (default) Label when we apply nothing", () => {
    const tree = renderer.create(<Label />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (disabled) Label when we apply disabled", () => {
    const tree = renderer.create(<Label disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (error) Label when we apply error", () => {
    const tree = renderer.create(<Label type="Error" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (success) Label when we apply success", () => {
    const tree = renderer.create(<Label type="Success" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render ( righticon) Label when we apply icon", () => {
    const tree = renderer.create(<Label icon="right" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render (prefix) Label when we apply prefix", () => {
    const tree = renderer.create(<Label prefix="withdrop" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// test(" type ", () => {
//   render(<Label />);
//   userEvent.type(screen.getByTestId("input"), "Hello,{enter}World!");
//   expect(screen.getByTestId("input")).toHaveValue("Hello,\nWorld!");
// });
