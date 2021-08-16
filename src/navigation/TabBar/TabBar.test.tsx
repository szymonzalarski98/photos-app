import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { TabBar } from "./TabBar";

jest.mock("../../components", () => ({
  "CardArrowIcon": "CardArrowIcon",
}));

jest.mock("../../components", () => ({
  "Text": "Text",
  "TextWeight": "TextWeight",
}))

describe("Test TabBar", () => {
  const mockNavigate = jest.fn();
  const mockProps = {
    state: {
      index: 0,
    },
    navigation: {
      navigate: mockNavigate,
    },
  };
  it("Should detect tabs and trigger onPress", () => {
    const { getByTestId } = render(<TabBar {...mockProps}  />);
    const tabOne = getByTestId("tab-bar-albums");
    const tabTwo = getByTestId("tab-bar-news");
    fireEvent.press(tabOne);
    fireEvent.press(tabTwo);
    expect(tabOne).not.toBeNull();
    expect(tabTwo).not.toBeNull();
    expect(mockNavigate).toBeCalledWith("Albums");
    expect(mockNavigate).toBeCalledWith("News");
  })
})