import React, { FunctionComponent } from "react";
import { TextInput } from "react-native";
import { TextWeight } from "../Text";
import { Container } from "./styles";

interface IInput {
  value: string;
  onChange: (value: string) => void;
}

export const Input: FunctionComponent<IInput> = ({ value, onChange }) => {
  return (
    <Container>
      <TextInput
        placeholder="Here you can add your comment..."
        placeholderTextColor="#586976"
        style={{ fontWeight: TextWeight.Normal }}
        multiline={true}
        value={value}
        onChangeText={onChange}
      />
    </Container>
  );
};