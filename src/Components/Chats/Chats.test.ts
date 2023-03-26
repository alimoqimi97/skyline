import { render, screen } from "@testing-library/react";
import { Chats } from "./Greetings";

describe("when rendered with a `name` prop", () => {
  it("should paste it into the greetings text", () => {
    render(<Chats name="Test Name" />); 
    expect(
      screen.getByTestId("Chats")
    ).toBeInTheDocument();
  });
});