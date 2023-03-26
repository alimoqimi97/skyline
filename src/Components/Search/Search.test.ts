import { render, screen } from "@testing-library/react";
import { Search } from "./Greetings";

describe("when rendered with a `name` prop", () => {
  it("should paste it into the greetings text", () => {
    render(<Search name="Test Name" />); 
    expect(
      screen.getByTestId("Search")
    ).toBeInTheDocument();
  });
});