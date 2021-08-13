import styled from "styled-components/native";
import { IText } from "./Text";

export const Text = styled.Text<Pick<IText, "color" | "size" | "weight">>`
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
`;