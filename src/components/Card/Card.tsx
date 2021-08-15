import React from "react";
import { ButtonContainer, Container, Content, Space } from "./styles";
import { Text } from "../Text";
import { CardArrowIcon } from "../CardArrowIcon";
import { FunctionComponent } from "react";

interface ICard {
  id: number;
  title: string;
  description: string;
  redirectToDetails: (id: number, title: string, description: string) => void;
}

export const Card: FunctionComponent<ICard> = ({ id, title, description, redirectToDetails }): JSX.Element => {
  const handleRedirectToDetails = () => redirectToDetails(id, title, description);
  const capitalizeFirstLetter = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);
  const formattedTitle = capitalizeFirstLetter(title);
  const formattedDescription = capitalizeFirstLetter(description);
  return (
    <Container key={id}>
      <Content>
        <Text>{formattedTitle}</Text>
        <Space />
        <Text color="#A0ABB2">{formattedDescription}</Text>
      </Content>
      <ButtonContainer onPress={handleRedirectToDetails}>
        <CardArrowIcon />
      </ButtonContainer>
    </Container>
  );
};