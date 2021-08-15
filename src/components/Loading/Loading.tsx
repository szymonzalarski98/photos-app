import React from "react";
import { ActivityIndicator } from "react-native";
import { Text } from "../../components";
import { Container } from "./styles";

export const Loading = (): JSX.Element => (
  <Container>
    <Text>Loading ...</Text>
    <ActivityIndicator size={20} color="#000" />
  </Container>
);