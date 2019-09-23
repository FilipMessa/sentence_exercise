import React from "react";
import { render } from "../../utils/test-utils";
import Star from "../Star";

test("Star", async () => {
  const message = "Welcome to Sentence Game!";

  const { getByText, container } = render(
    <Star size="large" message={message} />
  );
  expect(getByText(message)).toBeDefined();
  expect(container.querySelector("img")).toBeDefined();
});
