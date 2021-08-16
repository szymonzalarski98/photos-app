import React, { FunctionComponent } from "react";
import { Container, Space } from "./styles";
import { Text } from "../../components";
import { TextWeight } from "../Text";

interface IComment {
  id: number;
  name: string;
  body: string;
}

export const Comment: FunctionComponent<IComment> = ({ id, name, body }) => {
  return (
    <Container key={id} testID={id.toString()}>
      <Text color="#001524">{name}</Text>
      <Space height={4} />
      <Text color="#182F40" weight={TextWeight.Thin}>{body}</Text>
    </Container>
  );
};