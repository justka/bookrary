import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("Should render component Button without errors", () => {
  render(<Button text="" />);

  const button = screen.getByRole("button");
  expect(button).toBeTruthy();
});

test("Should render component Button with text on it", () => {
  render(<Button text="Submit" />);

  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Submit");
});

test("Should render component Button with type submit", () => {
  render(
    <Button
      text="Submit"
      type="submit"
    />
  );

  const button = screen.getByRole("button");
  expect(button).toHaveAttribute("type", "submit");
});

test("Should render component Button with type button", () => {
  render(<Button text="Submit" />);

  const button = screen.getByRole("button");
  expect(button).toHaveAttribute("type", "button");
});

test("Should call onClick when button is clicked", () => {
  const handleClick = jest.fn();
  render(
    <Button
      onClick={handleClick}
      text="Submit"
    />
  );

  const button = screen.getByText("Submit");
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
