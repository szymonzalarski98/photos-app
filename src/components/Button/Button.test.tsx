import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "./Button";

jest.mock("../../components", () => ({
  "Text": "Text",
}));

const mockOnPress = jest.fn();

describe("Test Button", () => {
  it("Should renders correctly", () => {
    const { getByTestId } = render(<Button title="test" onPress={mockOnPress} />);
    const button = getByTestId("button");
    expect(button).not.toBeNull();
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});