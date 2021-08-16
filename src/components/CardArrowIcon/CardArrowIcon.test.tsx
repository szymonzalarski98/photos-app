import React from "react";
import { render } from "@testing-library/react-native";
import { CardArrowIcon } from "./CardArrowIcon";

jest.mock("@expo/vector-icons", () => ({
  "Ionicons": "Ionicons",
}));


describe("Test CardArrowIcon", () => {
  it("Should renders correctly", () => {
    const { getByTestId } = render(<CardArrowIcon />);
    expect(getByTestId("card-arrow")).not.toBeNull();
  });
});