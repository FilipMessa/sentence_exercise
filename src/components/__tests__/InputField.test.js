import React from "react";
import { render, fireEvent } from "../../utils/test-utils";
import InputField from "../InputField";

test("InputField", async () => {
  const label = "Label";
  const onChange = jest.fn();
  const onKeyDown = jest.fn();
  const { getByText, container } = render(
    <InputField label={label} onChange={onChange} onKeyDown={onKeyDown} />
  );

  const input = container.querySelector("input");

  fireEvent.change(input, { target: { value: "a" } });
  fireEvent.keyDown(input, { key: "Enter", code: 13 });

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onKeyDown).toHaveBeenCalledTimes(1);

  expect(getByText(label)).toBeDefined();
});
