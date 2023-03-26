import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Greetings";

describe("when rendered with a `name` prop", () => {
  it("should paste it into the greetings text", () => {
    render(<Sidebar name="Test Name" />); 
    expect(
      screen.getByTestId("Sidebar")
    ).toBeInTheDocument();
  });
});