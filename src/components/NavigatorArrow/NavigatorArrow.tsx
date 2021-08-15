import React, { FunctionComponent } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Container, IconContainer } from "./styles";

interface INavigatorArrow {
  onPress: () => void;
}

export const NavigatorArrow: FunctionComponent<INavigatorArrow> = ({ onPress }) => {
  return (
    <Container>
      <IconContainer onPress={onPress}>
        <Ionicons name="chevron-back-outline" size={18} color="#466BC9" />
      </IconContainer>
    </Container>
  );
};