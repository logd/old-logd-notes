import React from "react";
import renderer from 'react-test-renderer';
import { Privacy } from "../Privacy";

it("renders correctly", () => {
  const tree = renderer
    .create(<Privacy />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
