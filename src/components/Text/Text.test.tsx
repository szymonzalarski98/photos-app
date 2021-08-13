import React from "react";
import { render } from "@testing-library/react-native";
import { Text, TextSize, TextWeight } from "./Text";

describe("Test Text component", () => {
  it("Should be bold, red and large sized", () => {
    const { getByText } = render(<Text color="red" size={TextSize.Large} weight={TextWeight.Bold}>Test</Text>);
    const component = getByText("Test");
    expect(component).not.toBeNull;
    expect(component.props.size).toBe(22);
    expect(component.props.weight).toBe("700");
    expect(component.props.color).toBe("red");
    expect(component.props.children).toBe("Test");
  });
});