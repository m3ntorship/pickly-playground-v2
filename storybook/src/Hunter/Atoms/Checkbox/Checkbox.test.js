import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

test("checkbox checked or not", () => {
  const { getByTestId } = render(<CheckBox />);
  expect(getByTestId("checkbox")).not.toBeChecked();
});
test("checkbox checked after clicked", () => {
  const { getByTestId } = render(<CheckBox />);
  const checkBox = getByTestId("checkbox");
  userEvent.click(checkBox);
  expect(checkBox).toBeChecked();
});
test("checkbox checked or not", () => {
  const { getByTestId } = render(<CheckBox disabled />);
  expect(getByTestId("checkbox")).toBeDisabled();
});
