import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

test("Should render component Input without errors", () => {
  // ARRANGE
  render(
    <Input
      label=""
      meta={{}}
      name=""
      onBlur={() => {}}
      onChange={() => {}}
      onFocus={() => {}}
      required={true}
      value=""
    />
  );

  // ACT

  // ASSERT
  const input = screen.getByRole("textbox");
  expect(input).toBeTruthy();
});
