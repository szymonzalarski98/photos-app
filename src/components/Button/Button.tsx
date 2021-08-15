import React, { FunctionComponent } from "react";
import { Text } from "../../components";
import { TextWeight } from "../Text";
import { Container } from "./styles";

interface IButton {
  title: string;
  onPress: () => void;
}

export const Button: FunctionComponent<IButton> = ({ title, onPress }): JSX.Element => {
  return (
    <Container onPress={onPress}>
      <Text color="#FFF" >{title}</Text>
    </Container>
  );
};