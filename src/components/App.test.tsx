import React from "react";
import renderer from 'react-test-renderer';
import { Editor } from "./Editor";

jest.mock("./Editor", () => {
  return {
    Editor: () => {
      return <></>;
    },
  };
});

it("renders correctly", () => {
  const tree = renderer
    .create(<div>
      <Editor />
      </div>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
