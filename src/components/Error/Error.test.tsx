import React from "react";
import { render } from "@testing-library/react-native";
import { Error } from "./Error";

jest.mock("@expo/vector-icons", () => ({
  "Ionicons": "Ionicons",
}));


describe("Test Error", () => {
  it("Should renders correctly", () => {
    const { getByTestId, getByText } = render(<Error message="test" />);
    expect(getByText("test")).not.toBeNull();
    expect(getByTestId("error-icon")).not.toBeNull();
  });
  it("Should render default message", () => {
    const { getByText } = render(<Error />);
    expect(getByText("Something went wrong")).not.toBeNull();
  });
});