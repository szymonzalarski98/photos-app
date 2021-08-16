import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Card } from "./Card";

jest.mock("../CardArrowIcon", () => ({
  "CardArrowIcon": "CardArrowIcon",
}));

describe("Test Card", () => {
  const mockRedirectToDetails = jest.fn();
  const mockProps = {
    id: 1,
    title: "title",
    description: "description",
    redirectToDetails: mockRedirectToDetails,
  }

  it("Should redner correct title and description", () => {
    const { getByTestId } = render(<Card {...mockProps}  />);
    expect(getByTestId("card-title")).not.toBeNull();
    expect(getByTestId("card-desc")).not.toBeNull();
    fireEvent.press(getByTestId("card-button"));
    expect(mockRedirectToDetails).toHaveBeenCalledWith(1, "title", "description");
  })
})