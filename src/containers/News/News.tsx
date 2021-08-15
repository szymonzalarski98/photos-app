import React, { FunctionComponent, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";
import { Card, Loading } from "../../components";
import { getNews, INews as INewsProps } from "../../api/getNews";

interface INews {
  navigation: {
    navigate: (name: string, params: { [key: string]: string | number }) => void; 
  };
}

export const News: FunctionComponent<INews> = ({ navigation }): JSX.Element => {
  const [data, setData] = useState<INewsProps[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const getNewsData = async () => {
    await getNews()
      .then((res) => {
        setData(res);
        setIsLoaded(true);
      });
  };
  const redirectToDetails = (id: number, title: string, description: string) => navigation.navigate("NewsDetails", { id, title, description })
  const renderItem = ({ item }: { item: INewsProps }) => <Card id={item.id} title={item.title} description={item.body} redirectToDetails={redirectToDetails} />;
  const keyExtractor = (item: INewsProps) => item.id.toString();
  useEffect(() => {
    getNewsData();
  }, []);
  return (
    <Container>
      {
        !isLoaded ?
        <Loading />
        :
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      }
    </Container> 
  );
};