import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Input } from "./Input";

jest.mock("@expo/vector-icons", () => ({
  "Ionicons": "Ionicons",
}));


describe("Test Input", () => {
  const mockOnChange = jest.fn();
  it("Should renders correctly", () => {
    const { getByTestId } = render(<Input value="test" onChange={mockOnChange} />);
    const input = getByTestId("input");
    expect(input).not.toBeNull();
    fireEvent.changeText(input, "123");
    expect(input.props.value).not.toBeNull();
    expect(mockOnChange).toHaveBeenCalledWith("123");
  });
});