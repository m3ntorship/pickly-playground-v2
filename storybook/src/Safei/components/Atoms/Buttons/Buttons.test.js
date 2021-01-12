// import React from "react";
// import renderer from "react-test-renderer";
// import PrimaryButtonLG from "./PrimaryButtonLG";
// import Button from "./Button";

// describe("render my primary button", () => {
//   it("render primary button comp large size", () => {
//     const tree = renderer.create(<PrimaryButtonLG />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
// //size = ['lg', 'md', 'sm]
// //type = ['primary', 'secondary', 'text']
// //isActive = ['true','false'] >>> Boolean
// //hasIcon = ['true', false] >>> Boolean
// //iconLocation = ['left', 'right', 'center']

// describe("render button based on passed props", () => {
//   //no icon:
//   it("renders large primary button with no icon", () => {
//     const tree = renderer
//       .create(<Button size={"lg"} hasIcon={"false"} type={"primary"} />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//   it("renders mid primary button with no icon", () => {
//     const tree = renderer
//       .create(<Button size={"md"} hasIcon={"false"} type={"primary"} />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//   it("renders small primary button with no icon", () => {
//     const tree = renderer
//       .create(<Button size={"sm"} hasIcon={"false"} type={"primary"} />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//   //Icon to the left:
//   it("renders large primary button with left icon", () => {
//     const tree = renderer
//       .create(
//         <Button
//           size={"lg"}
//           hasIcon={"true"}
//           iconLocation={"left"}
//           type={"primary"}
//         />
//       )
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//   it("renders mid primary button with left icon", () => {
//     const tree = renderer
//       .create(
//         <Button
//           size={"md"}
//           hasIcon={"true"}
//           iconLocation={"left"}
//           type={"primary"}
//         />
//       )
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//   it("renders small primary button with left icon", () => {
//     const tree = renderer
//       .create(
//         <Button
//           size={"sm"}
//           hasIcon={"true"}
//           iconLocation={"left"}
//           type={"primary"}
//         />
//       )
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
