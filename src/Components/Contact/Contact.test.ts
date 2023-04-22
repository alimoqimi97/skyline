import { render, screen } from "@testing-library/react";
import { Contact } from "./Greetings";

describe("when rendered with a `name` prop", () => {
  it("should paste it into the greetings text", () => {
    render(<Contact name="Test Name" />); 
    expect(
      screen.getByTestId("Contact")
    ).toBeInTheDocument();
  });
});