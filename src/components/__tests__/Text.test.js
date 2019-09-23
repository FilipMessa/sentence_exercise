import React from "react";
import { render } from "../../utils/test-utils";
import Text from "../Text";

test("Text", async () => {
  const text = "Lorem ipsum";

  const { getByText, container } = render(<Text>{text}</Text>);

  expect(getByText(text)).toBeDefined();
  expect(container.querySelector("p")).toBeDefined();
});

test("Text should render as a span", async () => {
  const text = "Lorem ipsum";

  const { getByText, container } = render(<Text elemet="span">{text}</Text>);

  expect(getByText(text)).toBeDefined();
  expect(container.querySelector("span")).toBeDefined();
});
