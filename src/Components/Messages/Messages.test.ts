import { render, screen } from "@testing-library/react";
import { Messages } from "./Greetings";

describe("when rendered with a `name` prop", () => {
  it("should paste it into the greetings text", () => {
    render(<Messages name="Test Name" />); 
    expect(
      screen.getByTestId("Messages")
    ).toBeInTheDocument();
  });
});