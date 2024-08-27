import { render, fireEvent, screen } from "@testing-library/react";
import Checkin from "./Checkin";
import axiosInstance from "../libs/axios";

jest.mock("../libs/axios");

describe("Checkin", () => {
  describe("when a user has added a comment", () => {
    test("clicking submit saves a checkin", () => {
      const comment = "Today is a good day :)";

      render(<Checkin />);

      const commentBox = screen.getByLabelText("comment-box");
      fireEvent.change(commentBox, { target: { value: comment } });

      const buttonElement = screen.getByText("Submit");
      fireEvent.click(buttonElement);

      expect(axiosInstance.post).toHaveBeenCalledWith("/checkin", {
        comment,
      });
    });
  });

  describe("(TODO - feature not implemented yet): when a user has not added a comment", () => {
    test("clicking submit does not save a checkin", () => {
      render(<Checkin />);

      const buttonElement = screen.getByText("Submit");
      fireEvent.click(buttonElement);

      expect(axiosInstance.post).not.toHaveBeenCalled();
    });
  });
});
