import { render, screen } from "@testing-library/react";
import { Chatbox } from "./Greetings";

describe("when rendered with a `name` prop", () => {
  it("should paste it into the greetings text", () => {
    render(<Chatbox name="Test Name" />); 
    expect(
      screen.getByTestId("Chatbox")
    ).toBeInTheDocument();
  });
});