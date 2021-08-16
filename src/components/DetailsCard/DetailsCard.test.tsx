import React from "react";
import { render } from "@testing-library/react-native";
import { DetailsCard } from "./DetailsCard";
import { getComments } from "../../api";

const mockGetComments = {
  postId: 1,
  name: "You",
  body: "Test",
  email: "you@email.com",
  id: 1,
};

jest.mock("@expo/vector-icons", () => ({
  "Ionicons": "Ionicons",
}));

jest.mock("../../api", () => ({
  getComments: jest.fn().mockResolvedValue([mockGetComments]),
}))

describe("Test Comment", () => {
  it("Should renders correctly", () => {
    const { getByText } = render(<DetailsCard id={0} title="title" description="test description" />);
    expect(getComments).toHaveBeenCalledTimes(1);
    expect(getByText("Title")).not.toBeNull();
    expect(getByText("Test description")).not.toBeNull();
  });
});