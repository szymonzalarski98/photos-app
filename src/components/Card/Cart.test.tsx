import React from "react";
import { render } from "@testing-library/react-native";
import { Card } from "./Card";

describe("Test Card", () => {
  const mockProps = {
    id: 1,
    title: "title",
    description: "description"
  }
  jest.mock("../CardArrowIcon", () => ({
    "CardArrowIcon": "CardArrowIcon",
  }));

  it("Should redner correct title and description", () => {
    const { getByText } = render(<Card {...mockProps}  />);
    const component = getByText("Title");
    expect(component.props.id).toBe("id");
    expect(component.props.title).toBe("title");
    expect(component.props.description).toBe("description");
  })
})