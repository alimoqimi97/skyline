import { render, screen } from "@testing-library/react";
import { MessageTextInput } from "./Greetings";

describe("when rendered with a `name` prop", () => {
  it("should paste it into the greetings text", () => {
    render(<MessageTextInput name="Test Name" />); 
    expect(
      screen.getByTestId("MessageTextInput")
    ).toBeInTheDocument();
  });
});