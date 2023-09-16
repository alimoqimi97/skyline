import { render, screen } from "@testing-library/react";
import { Loading } from "./Greetings";

describe("when rendered with a `name` prop", () => {
  it("should paste it into the greetings text", () => {
    render(<Loading name="Test Name" />); 
    expect(
      screen.getByTestId("Loading")
    ).toBeInTheDocument();
  });
});