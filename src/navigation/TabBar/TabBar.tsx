import React, { FunctionComponent } from "react";
import { Text, TextWeight } from "../../components";
import { Container, Label, Separator, Underline } from "./styles";

const TEXT_COLOR = "#586976";
const SELECTED_TEXT_COLOR = "#466BC9";

interface ITabBar {
  state: {
    index: number;
  },
  navigation: {
    navigate: (routeName: string) => void;
  },
};

export const TabBar: FunctionComponent<ITabBar> = ({ navigation: { navigate }, state: { index }}) => {
  return (
    <Container>
      <Label onPress={() => navigate("Albums")}>
        <Text
          color={index === 0 ? SELECTED_TEXT_COLOR : TEXT_COLOR}
          weight={index === 0 ? TextWeight.Bold : TextWeight.Normal}
        >
          Albums
        </Text>
        {index === 0 && <Underline />}
      </Label>
      <Separator />
      <Label onPress={() => navigate("News")}>
        <Text
          color={index === 1 ? SELECTED_TEXT_COLOR : TEXT_COLOR}
          weight={index === 1 ? TextWeight.Bold : TextWeight.Normal}
        >
          News
        </Text>
        {index === 1 && <Underline />}
      </Label>
    </Container>
  );
};