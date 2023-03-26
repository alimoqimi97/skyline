import { render, screen } from "@testing-library/react";
import { BaseButton } from "./Greetings";

describe("when rendered with a `name` prop", () => {
  it("should paste it into the greetings text", () => {
    render(<BaseButton name="Test Name" />); 
    expect(
      screen.getByTestId("BaseButton")
    ).toBeInTheDocument();
  });
});