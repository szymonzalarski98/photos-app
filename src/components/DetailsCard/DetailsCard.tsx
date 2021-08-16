import React, { FunctionComponent, useEffect, useState } from "react";
import { Container, Space, Wrapper } from "./styles";
import { Text, TextSize, TextWeight } from "../Text";
import { Input } from "../../components"
import { Button } from "../../components";
import { Comment } from "../../components";
import { Loading } from "../../components";
import { Error } from "../../components";
import { getComments, IComment } from "../../api";

interface IDetailsCard {
  id: number;
  title: string;
  description: string;
}


export const DetailsCard: FunctionComponent<IDetailsCard> = ({ id, title, description }): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [comments, setComments] = useState<IComment[]>([]);
  const capitalizeFirstLetter = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);
  const formattedTitle = capitalizeFirstLetter(title);
  const formattedDescription = capitalizeFirstLetter(description);
  const getCommentsData = async (postId: number) => {
    await getComments(postId)
      .then((res) => {
        setComments(res);
        setIsLoaded(true);
      })
      .catch(() => setIsError(true))
    
  };
  const handleAddcomment = () => {
    const newComment: IComment = {
      postId: id,
      name: "You",
      body: value,
      email: "you@email.com",
      id: comments.length + 1,
    };
    setComments([newComment, ...comments]);
  };
  useEffect(() => {
    getCommentsData(id);
  }, []);
  if (isError) {
    return <Error />;
  };
  return (
    <Wrapper key={id}>
      <Container>
        <Text size={TextSize.Large} color="#001524">{formattedTitle}</Text>
        <Space height={12} />
        <Text color="#182F40" weight={TextWeight.Thin}>{formattedDescription}</Text>
      </Container>
      <Space height={40} />
      <Text color="#586976">Comments</Text>
      <Space />
      <Input value={value} onChange={setValue} />
      <Space />
      <Button title="Add" onPress={handleAddcomment} />
      <Space height={24} />
      {
        !isLoaded ?
        <Loading />
        :
        <>
          {comments.map((item) => <Comment key={item.id} id={item.id} name={item.name} body={item.body} />)}
        </>
      }
    </Wrapper>
  );
};