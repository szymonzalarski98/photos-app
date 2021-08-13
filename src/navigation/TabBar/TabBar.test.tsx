import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { TabBar } from "./TabBar";

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
    const { getByText } = render(<TabBar {...mockProps}  />);
    const tabOne = getByText("Albums");
    const tabTwo = getByText("News");
    fireEvent.press(tabOne);
    fireEvent.press(tabTwo);
    expect(tabOne).not.toBeNull();
    expect(tabTwo).not.toBeNull();
    expect(mockNavigate).toBeCalledWith("Albums");
    expect(mockNavigate).toBeCalledWith("News");
  })
})