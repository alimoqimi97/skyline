import { render, screen } from "@testing-library/react";
import { Message } from "./Greetings";

describe("when rendered with a `name` prop", () => {
  it("should paste it into the greetings text", () => {
    render(<Message name="Test Name" />); 
    expect(
      screen.getByTestId("Message")
    ).toBeInTheDocument();
  });
});