import React from "react";
import { FunctionComponent } from "react";
import { Text as StyledText } from "./styles";

export enum TextSize {
  Small = 14,
  Medium = 16,
  Large = 22,
}

export enum TextWeight {
  Thin = "500",
  Normal = "600",
  Bold = "700",
}

export interface IText {
  size?: TextSize;
  color?: string;
  weight?: TextWeight
  children: React.ReactNode,
}

export const Text: FunctionComponent<IText> = ({ size = TextSize.Small, color = "#000000", weight = TextWeight.Normal, children }) => (
  <StyledText size={size} color={color} weight={weight}>{children}</StyledText>
);