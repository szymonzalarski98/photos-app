import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Album, Loading } from "../../components";
import { Error } from "../../components";
import { Container, Space } from "./styles";
import { getAlbums, IAlbum } from "../../api";

const blankItem =  {
  id: 999, title: "/BLANK/",
};

export const Albums = (): JSX.Element => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const renderItem = ({ item, index }: { item: IAlbum, index: number }) => {
    return (
      <>
        {index % 2 === 1 && <Space />}
        <Album id={item.id} title={item.title} />
      </>
    );
  };
  const getAlbumsData = async () => {
    await getAlbums()
      .then((res) => {
        setAlbums(res);
        setIsLoaded(true);
      })
      .catch(() => setIsError(true))
  };
  useEffect(() => {
    getAlbumsData();
  }, []);
  if (isError) {
    return <Error />;
  };
  return (
    <Container>
      {
        !isLoaded ?
        <Loading />
        :
        <FlatList
          data={albums.length % 2 === 0 ? albums : [...albums, blankItem]}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={{ justifyContent: "space-between" }}
        />
      }
    </Container> 
  );
};