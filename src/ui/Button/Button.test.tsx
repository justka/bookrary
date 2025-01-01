import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("Should render component Button without errors", () => {
  // ARRANGE
  render(<Button text="" />);

  // ACT

  // ASSERT
  const button = screen.getByRole("button");
  expect(button).toBeTruthy();
});

test("Should render component Button with text on it", () => {
  // ARRANGE
  render(<Button text="Submit" />);

  // ACT

  // ASSERT
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Submit");
});
