import { render, screen } from "@testing-library/react";
import { Navbar } from "./Greetings";

describe("when rendered with a `name` prop", () => {
  it("should paste it into the greetings text", () => {
    render(<Navbar name="Test Name" />); 
    expect(
      screen.getByTestId("Navbar")
    ).toBeInTheDocument();
  });
});