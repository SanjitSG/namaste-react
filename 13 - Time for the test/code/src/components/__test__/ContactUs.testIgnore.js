import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact up page Test Case", () => {
  it("Should load heading inside the contact us page", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside the contact US", () => {
    render(<ContactUs />);
    const button = screen.findByRole("button");
    expect(button);
  });

  it("Should load inputBoxes inside the contact US", () => {
    render(<ContactUs />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(3);
  });
});
