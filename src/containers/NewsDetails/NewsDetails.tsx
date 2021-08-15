import React, { FunctionComponent } from "react";
import { DetailsCard } from "../../components";
import { Container } from "./styles";

interface INewsDetails {
  route: {
    params: {
      id: number,
      title: string,
      description: string,
    };
  };
}

export const NewsDetails: FunctionComponent<INewsDetails> = ({ route }): JSX.Element => {
  const { id, title, description } = route.params;
  return (
    <Container>
      <DetailsCard
        id={id}
        title={title}
        description={description}
      />
    </Container>
  );
};