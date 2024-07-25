import { render, fireEvent, screen } from "@testing-library/react";
import Checkin from "./Checkin";

describe.skip("TODO: when a user has added a comment and clicked submit", () => {
  test("it submits the comment", () => {
    render(<Checkin />);

    const buttonElement = screen.getByText("Submit");
    fireEvent.click(buttonElement);
  });
});
