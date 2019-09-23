import React from "react";
import { render, fireEvent } from "../../utils/test-utils";
import Checkbox from "../Checkbox";

test("Checkbox", async () => {
  const text = "Lorem ipsum";
  const onChange = jest.fn();
  const { getByText, getByRole } = render(
    <Checkbox onChange={onChange} label={text} />
  );

  const checkbox = getByRole("checkbox");
  fireEvent.click(checkbox);

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(getByText(text)).toBeDefined();
});
