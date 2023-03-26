import { render, screen } from "@testing-library/react";
import { BaseInput } from "./Greetings";

describe("when rendered with a `name` prop", () => {
  it("should paste it into the greetings text", () => {
    render(<BaseInput name="Test Name" />); 
    expect(
      screen.getByTestId("BaseInput")
    ).toBeInTheDocument();
  });
});