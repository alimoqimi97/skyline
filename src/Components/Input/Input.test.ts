import { render, screen } from "@testing-library/react";
import { Input } from "./Greetings";

describe("when rendered with a `name` prop", () => {
  it("should paste it into the greetings text", () => {
    render(<Input name="Test Name" />); 
    expect(
      screen.getByTestId("Input")
    ).toBeInTheDocument();
  });
});