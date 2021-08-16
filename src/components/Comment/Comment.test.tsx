import React from "react";
import { render } from "@testing-library/react-native";
import { Comment } from "./Comment";

jest.mock("@expo/vector-icons", () => ({
  "Ionicons": "Ionicons",
}));


describe("Test Comment", () => {
  it("Should renders correctly", () => {
    const { getByText } = render(<Comment id={0} name="name" body="test body" />);
    expect(getByText("name")).not.toBeNull();
    expect(getByText("test body")).not.toBeNull();
  });
});