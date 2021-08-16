import React, { FunctionComponent } from "react";
import { Text } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import {Container } from "./styles";

interface IError {
  message?: string;
}

export const Error: FunctionComponent<IError> = ({ message }) => (
  <Container>
    <Ionicons testID="error-icon" name="alert-circle-outline" size={18} color="#000" />
    <Text>{message ?? "Something went wrong"}</Text>
  </Container>
);