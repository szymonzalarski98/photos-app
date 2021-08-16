import React from "react";
import { Container } from "./styles";
import { Ionicons } from "@expo/vector-icons";

export const CardArrowIcon = (): JSX.Element => (
  <Container>
    <Ionicons testID="card-arrow" name="chevron-forward-outline" size={18} color="#466BC9" />
  </Container>
);