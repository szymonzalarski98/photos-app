import React from "react";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { News, NewsDetails } from "../../containers";
import { NavigatorArrow } from "../../components";

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerStyle: {
    height: 88,
  },
  headerTitleStyle: {
    fontWeight: "bold",
    color: "#001524",
  }
};

const newsDetailsOption: StackNavigationOptions = {
  ...screenOptions,
  headerTitle: "News details",
  // eslint-disable-next-line react/display-name
  headerLeft: ({ onPress }: any) => <NavigatorArrow onPress={onPress} />
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const NewsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="NewsDetails" options={newsDetailsOption} component={NewsDetails} />
    </Stack.Navigator>
  );
};