import React, { FunctionComponent } from "react";
import { IAlbum } from "../../api";
import { Text } from "../../components";
import { Blank, Container, Title, Image } from "./styles";

export const Album: FunctionComponent<IAlbum> = ({ id, title }): JSX.Element => {
  const capitalizeFirstLetter = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);
  const formattedTitle = capitalizeFirstLetter(title);
  return (
    <>
      {
        title === "/BLANK/" ?
        <Blank key={id} />
        :
        <Container key={id}>
          <Image source={{ uri: "https://source.unsplash.com/random" }} />
          <Title>
            <Text numberOfLines={1}>{formattedTitle}</Text>
          </Title>
        </Container>
      }
    </>
  );
};