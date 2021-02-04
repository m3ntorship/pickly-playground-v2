import React from "react";
import renderer from "react-test-renderer";
import Progress from "./Progress";

describe("Progress Component", () => {
  it("should render vertical red slider when progress is less than 50", () => {
    const tree = renderer.create(<Progress progress={49} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render vertical purple slider when progress is less than 100", () => {
    const tree = renderer.create(<Progress progress={99} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render vertical green slider when progress is 100", () => {
    const tree = renderer.create(<Progress progress={100} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render horizontal green slider when progress is 100", () => {
    const tree = renderer.create(<Progress progress={100} row />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render disabled horizontal and purple slider when progress is less than 100", () => {
    const tree = renderer
      .create(<Progress progress={90} row disabled />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
