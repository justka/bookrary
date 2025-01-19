import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Message } from "./Message";

describe("Message component", () => {
  it("renders the provided text", () => {
    const testText = "Hello, world!";

    render(<Message text={testText} />);

    const messageElement = screen.getByText(testText);
    expect(messageElement).toBeInTheDocument();
  });

  it("has the correct class name", () => {
    render(<Message text="Sample text" />);

    const messageId = screen.getByTestId("message-id");
    expect(messageId).toHaveClass("message__container");
  });
});
